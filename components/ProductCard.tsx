import Image from "next/image";

export default function ProductCard({ name, description, image }: { name: string; description: string; image: string; }) {
  return (
    <div className="card text-center">
      <div className="relative w-full h-64">
        <Image
          src={`/images/foods/${image}`}
          alt={name}
          fill
          className="object-cover rounded-t-2xl"
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-brand-primary">{name}</h3>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}
