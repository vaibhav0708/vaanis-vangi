// components/PageLayout.tsx
export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col min-h-screen bg-fixed bg-repeat bg-center"
      style={{ backgroundImage: "url('/images/foods/doodle-bg-light.jpg')" }} // 👈 Use your light image
    >
      <div className="flex-grow flex justify-center items-start md:items-center px-4 py-8 md:py-12 bg-gray-100/90">
        {children}
      </div>
    </div>
  );
}
