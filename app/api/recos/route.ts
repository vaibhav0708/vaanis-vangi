import { prisma } from "@/lib/prisma";
export async function POST(req: Request){
  const { productId, limit = 6 } = await req.json();
  // coPurchase model isn't present in the current Prisma schema in this repo.
  // Cast `prisma` to `any` to avoid TypeScript errors until a proper model is added.
  const p: any = prisma as any;
  const cop = (await p.coPurchase?.findMany({ where: { fromId: productId }, orderBy: { count: "desc" }, take: limit*2 })) || [];
  const ids: string[] = cop.map((c: any) => c.toId);
  const prod = await prisma.product.findUnique({ where: { id: productId } });
  let more: string[] = [];
  if (ids.length < limit && prod) {
    const others = await prisma.product.findMany({ where: { id: { not: productId }, available: true } });
    const score = (a: string[], b: string[]) => a.filter(t=>b.includes(t)).length;
    more = others.sort((x:any,y:any)=> score(y.tags, prod.tags) - score(x.tags, prod.tags)).map((o:any)=>o.id);
  }
  const unique = [...new Set([...ids, ...more])].slice(0, limit);
  const items = await prisma.product.findMany({ where: { id: { in: unique } } });
  return Response.json(items);
}
