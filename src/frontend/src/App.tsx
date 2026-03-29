import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/918328202528?text=Hello%2C%20I%20want%20to%20order%20ice%20creams%20from%20Sindhuja%20Icecreams";

const menuCategories = [
  {
    icon: "🍦",
    name: "Sticks",
    badge: null,
    image: null,
    items: [
      { name: "Mango", price: "₹10" },
      { name: "Kacha Mango", price: "₹10" },
      { name: "Strawberry", price: "₹10" },
      { name: "Grapes", price: "₹10" },
    ],
  },
  {
    icon: "🥤",
    name: "Cups",
    badge: null,
    image: null,
    items: [
      { name: "Small Vanilla Cup", price: "₹10" },
      { name: "Butterscotch Cup", price: "₹15" },
    ],
  },
  {
    icon: "🍦",
    name: "Cones",
    badge: null,
    image: null,
    items: [
      { name: "Butterscotch Cone", price: "₹15" },
      { name: "Chocolate Cone", price: "₹30" },
    ],
  },
  {
    icon: "🍨",
    name: "Classic Specials",
    badge: null,
    image: null,
    items: [
      { name: "Kulfi", price: "₹15" },
      { name: "Chocobar", price: "₹15" },
      { name: "Swinger", price: "₹30" },
    ],
  },
  {
    icon: "👨‍👩‍👧‍👦",
    name: "Family Packs",
    badge: "Save More! 💰",
    image: null,
    items: [
      { name: "1/4 Litre", price: "₹35" },
      { name: "1/2 Litre", price: "₹60" },
      { name: "1 Litre", price: "₹120" },
    ],
  },
  {
    icon: "🌞",
    name: "Summer Specials",
    badge: "🔥 Hot Picks",
    image: null,
    items: [
      { name: "Matka Tutti Frutti", price: "₹30" },
      { name: "Strawberry Ball", price: "₹30" },
      { name: "Mango Ball", price: "₹30" },
    ],
  },
];

const testimonials = [
  {
    text: "Best ice creams in town! My kids absolutely love the mango sticks!",
    name: "Priya R.",
    stars: 5,
  },
  {
    text: "We ordered for our daughter\u2019s birthday \u2014 amazing variety and super affordable!",
    name: "Ravi K.",
    stars: 5,
  },
  {
    text: "The summer specials are incredible! Matka Tutti Frutti is our family favorite!",
    name: "Sunita M.",
    stars: 5,
  },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );
    for (const el of els) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
      role="img"
    >
      <title>WhatsApp</title>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Offers", href: "#offers" },
    { label: "About", href: "#about" },
    { label: "Delivery", href: "#delivery" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: "oklch(0.845 0.072 216)" }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-black text-gray-800"
        >
          <span className="text-2xl">🍦</span>
          <span>Sindhuja Icecreams</span>
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-ocid={`nav.${l.label.toLowerCase()}.link`}
              className="font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.order.button"
            className="btn-whatsapp px-5 py-2 text-sm flex items-center gap-2"
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </a>
        </div>
        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>
      {open && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={{ backgroundColor: "oklch(0.845 0.072 216)" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-semibold text-gray-700 hover:text-gray-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-whatsapp px-5 py-2 text-sm text-center flex items-center justify-center gap-2"
          >
            <WhatsAppIcon />
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/generated/happy-customers.dim_800x500.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.2) 100%)",
        }}
      />
      {/* Decorative ice cream image */}
      <img
        src="/assets/generated/icecream-hero.dim_800x600.jpg"
        alt="Colorful ice cream cone"
        className="absolute right-0 bottom-0 h-64 md:h-80 lg:h-96 object-contain opacity-90 pointer-events-none select-none"
        style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.3))" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight animate-fade-up">
            Sindhuja
            <br />
            <span style={{ color: "oklch(0.916 0.115 96)" }}>Icecreams</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90 font-medium animate-fade-up-delay-1">
            Cool Treats for Every Mood! 🍧
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up-delay-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.order.button"
              className="btn-whatsapp px-7 py-3 text-base flex items-center gap-2"
            >
              <WhatsAppIcon />
              Order Now on WhatsApp
            </a>
            <a
              href="#menu"
              data-ocid="hero.menu.button"
              className="px-7 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-800 transition-colors text-base"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-pink-pastel">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="reveal">
          <span className="text-4xl">🍧</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-gray-800">
            About Us
          </h2>
          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            We serve <strong>fresh, tasty, and affordable ice creams</strong>{" "}
            right here in Godavarikhani, Telangana. From classic sticks to
            exotic summer specials — every treat is made with love and the
            finest ingredients. 🍧
          </p>
          <p className="mt-3 text-lg text-gray-700">
            Whether it&apos;s a hot summer afternoon or a celebration with
            family, Sindhuja Icecreams is your go-to destination for cool,
            creamy happiness.
          </p>
        </div>
        <div
          className="mt-10 reveal rounded-2xl p-6 md:p-8 shadow-card"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.05 5), oklch(0.97 0.04 30))",
          }}
        >
          <span className="text-3xl">🎉</span>
          <h3 className="mt-2 text-xl font-bold text-gray-800">
            Special Discounts for Marriage &amp; Bulk Orders!
          </h3>
          <p className="mt-2 text-gray-700">
            Planning a wedding, birthday, or event? Get exclusive discounts on
            bulk ice cream orders. Contact us today!
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="about.order.button"
            className="mt-4 inline-flex items-center gap-2 btn-whatsapp px-6 py-2.5 text-sm"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function MenuCard({
  category,
  index,
}: {
  category: (typeof menuCategories)[0];
  index: number;
}) {
  const colors = [
    "oklch(0.97 0.04 216)",
    "oklch(0.97 0.04 5)",
    "oklch(0.97 0.06 96)",
    "oklch(0.97 0.03 280)",
    "oklch(0.97 0.04 150)",
    "oklch(0.97 0.05 30)",
  ];
  return (
    <div
      className="card-hover rounded-2xl overflow-hidden shadow-card flex flex-col"
      style={{ background: colors[index % colors.length] }}
      data-ocid={`menu.item.${index + 1}`}
    >
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{category.icon}</span>
            <h3 className="font-bold text-gray-800 text-lg">{category.name}</h3>
          </div>
          {category.badge && (
            <span
              className="text-xs font-bold px-3 py-1 rounded-full text-white whitespace-nowrap"
              style={{ backgroundColor: "oklch(0.696 0.196 149)" }}
            >
              {category.badge}
            </span>
          )}
        </div>
        <ul className="mt-4 space-y-2 flex-1">
          {category.items.map((item) => (
            <li key={item.name} className="flex items-center justify-between">
              <span className="text-gray-700">{item.name}</span>
              <span className="font-bold text-gray-800">{item.price}</span>
            </li>
          ))}
        </ul>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 btn-whatsapp py-2 text-sm text-center flex items-center justify-center gap-2"
          data-ocid={`menu.order.button.${index + 1}`}
        >
          <WhatsAppIcon />
          Order Now
        </a>
      </div>
    </div>
  );
}

function MenuSection() {
  return (
    <section
      id="menu"
      className="py-20"
      style={{ backgroundColor: "oklch(0.98 0.02 85)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center reveal">
          <span className="text-4xl">🍽️</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-gray-800">
            Our Menu
          </h2>
          <p className="mt-2 text-gray-600">Fresh flavors for every craving</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {menuCategories.map((cat, i) => (
            <div
              key={cat.name}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <MenuCard category={cat} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverySection() {
  return (
    <section id="delivery" className="py-20 bg-sky-pastel">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center reveal">
          <span className="text-5xl">🛵</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-gray-800">
            Delivery Available
          </h2>
          <p
            className="mt-4 text-2xl font-bold"
            style={{ color: "oklch(0.45 0.15 240)" }}
          >
            Godavarikhani &amp; Nearby Areas
          </p>
        </div>
        {/* Styled map placeholder */}
        <div
          className="reveal mt-10 rounded-2xl overflow-hidden shadow-card relative h-52 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.82 0.09 210), oklch(0.75 0.12 200), oklch(0.82 0.06 230))",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 40px)",
            }}
          />
          <div className="relative flex flex-col items-center">
            <span className="text-5xl drop-shadow-lg">📍</span>
            <span className="mt-2 bg-white/90 px-4 py-1.5 rounded-full font-bold text-gray-800 text-sm shadow">
              Godavarikhani, Telangana
            </span>
          </div>
        </div>
        <ul className="reveal mt-10 space-y-3 max-w-md mx-auto">
          {[
            "Free delivery for orders within Godavarikhani",
            "Delivery available in nearby areas (contact for details)",
            "Same-day delivery for early orders",
            "Bulk & event delivery available on request",
          ].map((note) => (
            <li key={note} className="flex items-start gap-3 text-gray-700">
              <span className="text-green-600 mt-0.5">✅</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function OffersSection() {
  return (
    <section id="offers" className="py-20 bg-yellow-pastel">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center reveal">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            Special Offers 🎉
          </h2>
          <p className="mt-2 text-gray-700">
            Get more value with our exclusive deals
          </p>
        </div>
        <div
          className="reveal mt-10 rounded-3xl p-8 md:p-12 text-center shadow-card"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.09 80), oklch(0.95 0.12 55))",
            border: "2px solid oklch(0.88 0.14 75)",
          }}
        >
          <span className="text-5xl">💍</span>
          <h3 className="mt-4 text-2xl md:text-3xl font-black text-gray-800">
            Marriage &amp; Bulk Orders Get Special Discounts!
          </h3>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Planning a wedding, party, or event? Get exclusive discounts on bulk
            ice cream orders. Contact us today to discuss your requirements!
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="offers.order.button"
            className="mt-6 inline-flex items-center gap-2 btn-whatsapp px-8 py-3 text-base"
          >
            <WhatsAppIcon />
            Get Your Discount Now
          </a>
        </div>
        <div className="reveal mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🎂", label: "Birthday Parties" },
            { icon: "💒", label: "Weddings" },
            { icon: "🎊", label: "Corporate Events" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-5 text-center bg-white/80 shadow-card"
            >
              <div className="text-4xl">{item.icon}</div>
              <div className="mt-2 font-semibold text-gray-800">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-pink-pastel">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center reveal">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            What Our Customers Say ❤️
          </h2>
          <p className="mt-2 text-gray-600">
            Real reviews from happy customers in Godavarikhani
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal card-hover rounded-2xl p-6 bg-white shadow-card flex flex-col gap-3"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="text-yellow-400 text-xl">
                {"⭐".repeat(t.stars)}
              </div>
              <p className="text-gray-700 italic">&ldquo;{t.text}&rdquo;</p>
              <p className="font-bold text-gray-800 mt-auto">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrderSection() {
  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="reveal">
          <span className="text-4xl">📱</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-gray-800">
            Order Now
          </h2>
          <p className="mt-2 text-gray-600">Quick, easy, and delicious!</p>
        </div>
        <div
          className="reveal mt-10 rounded-3xl p-8 shadow-card"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.97 0.03 145), oklch(0.95 0.05 145))",
          }}
        >
          <div className="flex justify-center text-green-600">
            <WhatsAppIcon />
          </div>
          <h3 className="mt-3 text-2xl font-black text-gray-800">
            Order on WhatsApp
          </h3>
          <p
            className="mt-3 text-2xl font-bold"
            style={{ color: "oklch(0.45 0.18 149)" }}
          >
            +91 83282 02528
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="order.primary_button"
            className="mt-6 inline-flex items-center gap-2 btn-whatsapp px-8 py-3.5 text-base"
          >
            <WhatsAppIcon />
            Order Now on WhatsApp
          </a>
          <p className="mt-5 text-sm text-gray-600">
            All payments and order confirmations are handled via WhatsApp chat
            only.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-sky-pastel">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center reveal">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            Contact Us
          </h2>
          <p className="mt-2 text-gray-700">
            We&apos;re always happy to hear from you!
          </p>
        </div>
        <div className="reveal mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {[
              {
                icon: "📍",
                label: "Address",
                value: "Godavarikhani, Telangana, India",
              },
              {
                icon: "📱",
                label: "WhatsApp",
                value: "+91 83282 02528",
                href: WA_LINK,
              },
              {
                icon: "🕐",
                label: "Hours",
                value: "Open Daily: 10:00 AM \u2013 10:00 PM",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 bg-white/80 rounded-2xl p-5 shadow-card"
              >
                <span className="text-2xl mt-0.5">{c.icon}</span>
                <div>
                  <div className="font-bold text-gray-800">{c.label}</div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 font-semibold hover:underline"
                      data-ocid="contact.whatsapp.link"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="text-gray-700">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Map placeholder */}
          <div
            className="rounded-2xl overflow-hidden shadow-card relative h-64 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.8 0.1 210), oklch(0.72 0.14 200))",
            }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 40px)",
              }}
            />
            <div className="relative flex flex-col items-center">
              <span className="text-5xl drop-shadow-lg">📍</span>
              <span className="mt-2 bg-white/90 px-4 py-1.5 rounded-full font-bold text-gray-800 text-sm shadow">
                Godavarikhani, Telangana
              </span>
              <span className="mt-1 text-white/80 text-xs">India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer className="bg-sky-pastel py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-black text-gray-800">
              <span className="text-2xl">🍦</span>
              <span>Sindhuja Icecreams</span>
            </div>
            <p className="mt-3 text-gray-700 text-sm">
              Cool Treats for Every Mood! 🍧
              <br />
              Godavarikhani, Telangana, India
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Menu", href: "#menu" },
                { label: "Special Offers", href: "#offers" },
                { label: "Delivery Info", href: "#delivery" },
                { label: "Order Now", href: "#order" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Order on WhatsApp</h4>
            <p className="text-gray-700 text-sm mb-3">+91 83282 02528</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.order.button"
              className="inline-flex items-center gap-2 btn-whatsapp px-5 py-2.5 text-sm"
            >
              <WhatsAppIcon />
              Order Now
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/50 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <p>© {year} Sindhuja Icecreams. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-800"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="floating.whatsapp.button"
      className="fixed bottom-6 right-6 z-50 animate-pulse-wa rounded-full p-4 text-white shadow-lg flex items-center justify-center"
      style={{
        backgroundColor: "oklch(0.696 0.196 149)",
        width: 60,
        height: 60,
      }}
      aria-label="Order on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}

export default function App() {
  useScrollReveal();

  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <DeliverySection />
        <OffersSection />
        <TestimonialsSection />
        <OrderSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
