export default function BananaBread() {
  const ingredients = [
    { amount: "3", unit: "large", item: "overripe bananas, mashed" },
    { amount: "⅓ cup", unit: "", item: "unsalted butter, browned" },
    { amount: "¾ cup", unit: "", item: "granulated sugar" },
    { amount: "1", unit: "large", item: "egg, beaten" },
    { amount: "1 tsp", unit: "", item: "pure vanilla extract" },
    { amount: "1 tsp", unit: "", item: "baking soda" },
    { amount: "½ tsp", unit: "", item: "fine sea salt" },
    { amount: "1 tsp", unit: "", item: "ground cinnamon" },
    { amount: "1½ cups", unit: "", item: "all-purpose flour" },
    { amount: "¼ cup", unit: "", item: "sour cream or Greek yogurt" },
  ];

  const steps = [
    {
      step: 1,
      title: "Brown the butter",
      description:
        "Melt butter in a small saucepan over medium heat, swirling occasionally, until it turns golden and smells nutty — about 4–5 minutes. Pour into a large mixing bowl and let cool slightly.",
    },
    {
      step: 2,
      title: "Mash the bananas",
      description:
        "Peel your overripe bananas and mash them thoroughly with a fork in a separate bowl. The riper the banana, the sweeter and more flavorful your bread will be.",
    },
    {
      step: 3,
      title: "Mix the wet ingredients",
      description:
        "Whisk the sugar into the browned butter, then add the beaten egg, vanilla extract, sour cream, and mashed bananas. Stir until everything is well combined.",
    },
    {
      step: 4,
      title: "Add dry ingredients",
      description:
        "Sprinkle in the baking soda, salt, and cinnamon and stir to combine. Fold in the flour gently until just incorporated — do not overmix or the bread will be dense.",
    },
    {
      step: 5,
      title: "Bake to perfection",
      description:
        "Pour batter into a greased 9×5 inch loaf pan. Bake at 350°F (175°C) for 55–65 minutes, until a toothpick inserted in the center comes out clean. Cool in the pan for 10 minutes before slicing.",
    },
  ];

  const tips = [
    { icon: "🍌", tip: "The blacker the banana, the better — freezing bananas is a great trick to speed up ripening." },
    { icon: "🧈", tip: "Don't skip browning the butter! It adds an incredible nutty depth you'll never want to go without." },
    { icon: "🥄", tip: "Fold the flour gently and stop as soon as you don't see dry streaks for the most tender crumb." },
    { icon: "❄️", tip: "Slices freeze beautifully for up to 3 months. Wrap individually and reheat in the toaster." },
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #fff0f6 0%, #fde8f0 40%, #fdf6c8 100%)" }}>

      {/* Nav */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-white/70 border-b border-pink-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌸</span>
            <span className="font-serif text-xl font-bold text-rose-400 tracking-wide group-hover:text-rose-500 transition-colors">
              Claire Bakes
            </span>
          </a>
          <a href="/" className="text-sm text-stone-400 hover:text-rose-400 transition-colors font-medium">
            ← Back to Recipes
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-14 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 text-pink-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          🍌 Quick Bread
        </div>
        <div className="text-8xl mb-4 animate-bounce" style={{ animationDuration: "2s" }}>🍌</div>
        <h1 className="font-serif text-5xl sm:text-6xl font-bold text-stone-800 leading-tight mb-4">
          Classic Banana Bread
        </h1>
        <p className="text-stone-500 text-lg max-w-lg mx-auto leading-relaxed mb-8">
          Moist, tender, and packed with banana flavor — made extra special with browned butter
          and a touch of cinnamon. No mixer, no fuss.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            { label: "Prep Time", value: "10 min", icon: "⏱️" },
            { label: "Bake Time", value: "60 min", icon: "🔥" },
            { label: "Serves", value: "10 slices", icon: "🍞" },
            { label: "Difficulty", value: "Easy", icon: "⭐" },
          ].map(({ label, value, icon }) => (
            <div
              key={label}
              className="bg-white/80 border border-pink-200 rounded-2xl px-5 py-3 text-center shadow-sm"
            >
              <div className="text-xl mb-0.5">{icon}</div>
              <div className="text-xs text-stone-400 font-medium uppercase tracking-wide">{label}</div>
              <div className="text-sm font-bold text-stone-700">{value}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 text-pink-300 text-xl mt-6">
          <span>🍌</span><span>✦</span><span>🍌</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-20 grid gap-10 lg:grid-cols-[1fr_1.6fr]">

        {/* Ingredients */}
        <section>
          <div className="bg-white/80 border border-pink-200 rounded-3xl p-7 shadow-sm sticky top-24">
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-5 flex items-center gap-2">
              <span>🛒</span> Ingredients
            </h2>
            <ul className="space-y-3">
              {ingredients.map(({ amount, unit, item }) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-pink-300 shrink-0" />
                  <span className="text-stone-600 text-sm leading-snug">
                    <span className="font-bold text-stone-800">{amount}{unit ? " " + unit : ""}</span>{" "}
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-pink-50 border border-pink-100 rounded-2xl px-4 py-3 text-xs text-pink-600 font-medium text-center">
              🍌 Makes one 9×5 inch loaf
            </div>
          </div>
        </section>

        {/* Instructions + Tips */}
        <section className="flex flex-col gap-8">
          {/* Steps */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-5 flex items-center gap-2">
              <span>👩‍🍳</span> Instructions
            </h2>
            <ol className="space-y-5">
              {steps.map(({ step, title, description }) => (
                <li key={step} className="flex gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-full bg-pink-400 text-white font-bold text-sm flex items-center justify-center shadow">
                    {step}
                  </div>
                  <div className="bg-white/80 border border-pink-100 rounded-2xl px-5 py-4 shadow-sm flex-1">
                    <h3 className="font-semibold text-stone-800 mb-1">{title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-br from-pink-50 to-yellow-50 border border-pink-200 rounded-3xl p-7 shadow-sm">
            <h2 className="font-serif text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
              <span>💛</span> Claire&apos;s Tips
            </h2>
            <ul className="space-y-3">
              {tips.map(({ icon, tip }) => (
                <li key={tip} className="flex items-start gap-3 text-sm text-stone-600 leading-relaxed">
                  <span className="text-lg shrink-0">{icon}</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-stone-400 text-xs border-t border-pink-100">
        <span>🌸 Made with love by Claire · {new Date().getFullYear()} · Claire Bakes</span>
      </footer>
    </div>
  );
}
