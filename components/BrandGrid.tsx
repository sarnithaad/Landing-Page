export default function BrandGrid() {
  const brands = ['hero1', 'honda', 'bajaj', 'tvs', 'royalenfield', 'yamaha', 'ktm', 'ather', 'ola', 'revolt', 'uv', 'tork'];

  return (
    <section className="mt-16 px-6 py-12">
      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-5xl">
          LOROM IPSUM DOLOR SIT AMET CONSECTETUR. COMMENDO LEO AMET.
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <div key={brand} className="flex items-center justify-center p-4">
            <img
              src={`/images/${brand}.jpg`}
              alt={brand}
              className="h-20 max-h-28 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
