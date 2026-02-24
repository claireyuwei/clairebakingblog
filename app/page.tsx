import Link from "next/link";

export default function Home() {
  const recipes = [
    {
      title: "Classic Banana Bread",
      emoji: "🍌",
      tag: "Fan Favorite",
      tagColor: "bg-yellow-100 text-yellow-700",
      description:
        "Perfectly moist and naturally sweet, this banana bread is my go-to for overripe bananas. Made with browned butter and a touch of cinnamon, every slice is tender with a golden, slightly crisp crust. It's the kind of recipe that fills your whole kitchen with the most comforting aroma.",
      details: ["Prep: 10 min", "Bake: 60 min", "Serves: 10 slices"],
      accent: "from-yellow-50 to-amber-50",
      border: "border-yellow-200",
      tagBg: "bg-yellow-400",
      href: "/banana-bread",
    },
    {
      title: "Spiced Pumpkin Bread",
      emoji: "🎃",
      tag: "Seasonal",
      tagColor: "bg-orange-100 text-orange-700",
      description:
        "Warmly spiced with cinnamon, nutmeg, ginger, and cloves, this pumpkin bread is incredibly soft with a deep, earthy sweetness. I use real pumpkin purée for the best flavor, and a sprinkle of pepitas on top gives it a beautiful, bakery-worthy finish.",
      details: ["Prep: 15 min", "Bake: 65 min", "Serves: 10 slices"],
      accent: "from-orange-50 to-amber-50",
      border: "border-orange-200",
      tagBg: "bg-orange-400",
      href: "",
    },
    {
      title: "Bright Lemon Loaf",
      emoji: "🍋",
      tag: "Spring Special",
      tagColor: "bg-green-100 text-green-700",
      description:
        "Bursting with fresh lemon zest and finished with a tangy lemon glaze, this loaf is light, bright, and impossibly tender. It's my favorite thing to bake when spring arrives — the citrusy fragrance is just pure sunshine. Perfect with a cup of tea on a warm afternoon.",
      details: ["Prep: 12 min", "Bake: 55 min", "Serves: 10 slices"],
      accent: "from-lime-50 to-yellow-50",
      border: "border-lime-200",
      tagBg: "bg-lime-400",
      href: "",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #fdf6f0 0%, #f9fce8 50%, #f0faf5 100%)" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-pink-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌸</span>
            <span className="font-serif text-xl font-bold text-rose-500 tracking-wide">Claire Bakes</span>
          </div>
          <div className="hidden sm:flex gap-6 text-sm font-medium text-stone-500">
            <a href="#recipes" className="hover:text-rose-400 transition-colors">Recipes</a>
            <a href="#about" className="hover:text-rose-400 transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 text-pink-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          <span>🌷</span> A Spring Baking Blog
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-stone-800 leading-tight mb-5">
          Baked with Love,<br />
          <span className="text-rose-400">One Loaf at a Time</span>
        </h1>
        <p className="text-stone-500 text-lg max-w-xl mx-auto leading-relaxed mb-8">
          Hi, I&apos;m <span className="font-semibold text-stone-700">Claire</span> — a home baker obsessed with quick breads, fresh flavors, and the magic of a warm oven. Welcome to my little corner of the internet.
        </p>
        <a
          href="#recipes"
          className="inline-block bg-rose-400 hover:bg-rose-500 transition-colors text-white font-semibold px-8 py-3 rounded-full shadow-md text-sm"
        >
          Browse Recipes ↓
        </a>

        {/* Decorative divider */}
        <div className="mt-14 flex items-center justify-center gap-3 text-pink-300 text-xl">
          <span>✿</span><span>✦</span><span>✿</span>
        </div>
      </header>

      {/* Recipes */}
      <section id="recipes" className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="font-serif text-3xl font-bold text-stone-700 text-center mb-2">My Favorite Loaves</h2>
        <p className="text-center text-stone-400 text-sm mb-10">Simple ingredients, big flavors — no mixer required.</p>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.title}
              className={`rounded-3xl border ${recipe.border} bg-gradient-to-br ${recipe.accent} p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start justify-between">
                <span className="text-5xl">{recipe.emoji}</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${recipe.tagColor}`}>
                  {recipe.tag}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-800 mb-2">{recipe.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{recipe.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {recipe.details.map((d) => (
                  <span key={d} className="bg-white/70 text-stone-500 text-xs px-3 py-1 rounded-full border border-white">
                    {d}
                  </span>
                ))}
              </div>
              {recipe.href ? (
                <Link
                  href={recipe.href}
                  className="mt-1 block w-full bg-white hover:bg-rose-50 transition-colors border border-rose-200 text-rose-500 font-semibold text-sm py-2.5 rounded-2xl text-center"
                >
                  View Recipe →
                </Link>
              ) : (
                <button className="mt-1 w-full bg-white/50 border border-rose-100 text-rose-300 font-semibold text-sm py-2.5 rounded-2xl cursor-not-allowed" disabled>
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white/60 border-t border-pink-100">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <span className="text-4xl mb-4 block">👩‍🍳</span>
          <h2 className="font-serif text-3xl font-bold text-stone-800 mb-4">Hey, I&apos;m Claire!</h2>
          <p className="text-stone-500 leading-relaxed text-base max-w-xl mx-auto">
            I started baking quick breads when I wanted something homemade without spending hours in the kitchen. These recipes are all tried, tested, and deeply loved — I hope they bring as much joy to your home as they do to mine. Happy baking! 🌸
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-stone-400 text-xs border-t border-pink-100">
        <span>🌸 Made with love by Claire · {new Date().getFullYear()} · Claire Bakes</span>
      </footer>
    </div>
  );
}
