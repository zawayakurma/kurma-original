// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".indicator");

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
    slide.classList.toggle("hidden", i !== currentSlide);
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("opacity-50", i !== currentSlide);
    indicator.classList.toggle("!opacity-100", i === currentSlide);
  });
}

// Auto slide
let autoSlide = setInterval(() => showSlide(currentSlide + 1), 5000);

// Manual controls
document.getElementById("prevSlide").addEventListener("click", () => {
  clearInterval(autoSlide);
  showSlide(currentSlide - 1);
  autoSlide = setInterval(() => showSlide(currentSlide + 1), 5000);
});

document.getElementById("nextSlide").addEventListener("click", () => {
  clearInterval(autoSlide);
  showSlide(currentSlide + 1);
  autoSlide = setInterval(() => showSlide(currentSlide + 1), 5000);
});

// Scroll Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-show");
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(".section-hidden")
  .forEach((el) => observer.observe(el));

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.remove("nav-hidden");
    nav.classList.add("bg-white", "shadow-md");
  } else {
    nav.classList.add("nav-hidden");
    nav.classList.remove("bg-white", "shadow-md");
  }
});

// Mobile Menu Toggle
document.getElementById("menu-btn").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

 // Product Data
    const products = [
      {
        name: "Kurma Medjool Asli Palestina",
        image: "1.png",
        description:
          "Kurma Medjool adalah salah satu jenis kurma premium terbaik yang telah dikenal di seluruh dunia.",
        scent:
          "Kurma Medjool yang kami jual bekerja sama dengan perusahaan Palestine Date Company salah satu perusahaan terbesar milik kaum muslimin di Jericho West Bank.",
        longevity: "",
        intensity: "",
        notes: ["", "", ""],
        variants: [
          {
            size: "500g",
            price: "Rp 135.000",
            shopeeLink:
              "https://zawayakurma.orderonline.id/kurma-medjool-500gram",
          },
          {
            size: "1kg",
            price: "Rp 250.000",
            shopeeLink: "https://zawayakurma.orderonline.id/kurma-medjool-1kg",
          },
        ],
      },
      {
        name: "Oud Madawwy",
        image: ".png",
        description:
          "Perpaduan aroma klasik yang mewah, menampilkan keanggunan sejati.",
        scent: "Oriental, Spicy",
        longevity: "10-12 Jam",
        intensity: "Strong",
        notes: [
          "Top Notes: Saffron, Cardamom",
          "Middle Notes: Rose, Oud",
          "Base Notes: Vanilla, Sandalwood",
        ],
        variants: [
          {
            size: "3ml",
            price: "Rp 180.000",
            shopeeLink: "https://shopee.co.id/ula-classic-3ml",
          },
          {
            size: "6ml",
            price: "Rp 300.000",
            shopeeLink: "https://shopee.co.id/ula-classic-6ml",
          },
        ],
      },
      {
        name: "Kurma Shoidi",
        image: "4.png",
        description:
          "Kurma Shoidi dikenal luas karena kualitasnya yang baik dan sering dikemas secara praktis, menjadikannya pilihan yang populer, terutama selama bulan Ramadan.",
        scent:
          "Saat banyak orang mencari kurma untuk berbuka puasa, Kurma Shoidi hadir sebagai solusi yang sempurna.",
        longevity: "",
        intensity: "",
        notes: ["", "", ""],
        variants: [
          {
            size: "400g",
            price: "Rp 35.000",
            shopeeLink: "https://zawayakurma.orderonline.id/kurma-shoidi-400g",
          },
          {
            size: "1kg",
            price: "Rp 60.000",
            shopeeLink: "https://zawayakurma.orderonline.id/kurma-shoidi-1kg",
          },
        ],
      },
      {
        name: "Kurma Ajwa",
        image: "2.png",
        description:
          "Kurma Ajwa, yang juga dikenal sebagai Kurma Nabi, sangat istimewa bagi umat Muslim karena direkomendasikan langsung oleh Nabi Muhammad ﷺ.",
        scent:
          'Kurma ini menjadi pilihan favorit karena memiliki nilai sejarah dan manfaat kesehatan yang luar biasa. Nabi Muhammad ﷺ bersabda: "Barangsiapa mengonsumsi tujuh butir kurma Ajwa di pagi hari, maka pada hari itu ia tidak akan terkena racun maupun sihir." (HR. Bukhari dan Muslim).',
        longevity: "",
        intensity: "",
        notes: ["", "", ""],
        variants: [
          {
            size: "500g",
            price: "Rp 160.000",
            shopeeLink: "https://zawayakurma.orderonline.id/kurma-ajwa-500g",
          },
          {
            size: "1kg",
            price: "Rp 275.000",
            shopeeLink: "https://zawayakurma.orderonline.id/kurma-ajwa-1kg",
          },
        ],
      },
      {
        name: "Kurma Sukkari",
        image: "3.png",
        description:
          "Kurma Sukkari, yang dikenal juga sebagai Kurma Raja, merupakan salah satu jenis kurma yang sangat populer dan berkualitas tinggi.",
        scent:
          "Kurma ini berasal dari Provinsi Al-Qasim, Arab Saudi, sehingga sering disebut sebagai Sukkari Al-Qasim.",
        longevity: "",
        intensity: "",
        notes: ["", "", ""],
        variants: [
          {
            size: "500g",
            price: "Rp 55.000",
            shopeeLink: "https://zawayakurma.orderonline.id/kurma-sukari-500g",
          },
          {
            size: "1kg",
            price: "Rp 85.000",
            shopeeLink: "https://zawayakurma.orderonline.id/kurma-sukari-1kg",
          },
          {
            size: "3kg",
            price: "Rp 165.000",
            shopeeLink: "https://zawayakurma.orderonline.id/kurma-sukari-3kg",
          },
        ],
      },
      {
        name: "Alula Oud",
        image: "5.png",
        description: "Memadukan gaharu yang lembut dan elegan",
        scent: "Oud, Vanilla, Amber, Versatile",
        longevity: "10-12 Jam",
        intensity: "Medium",
        notes: [
          "Top Notes: Vanilla",
          "Middle Notes: Oud",
          "Base Notes: Sandalwood",
        ],
        variants: [
          {
            size: "3ml",
            price: "Rp 63.000",
            shopeeLink: "https://shopee.co.id/ula-classic-3ml",
          },
          {
            size: "6ml",
            price: "Rp 98.000",
            shopeeLink: "https://shopee.co.id/ula-classic-6ml",
          },
        ],
      },
      // Add similar objects for other products...
    ];

function showModal(productName) {
    const product = products.find(p => p.name === productName);
    
    if (!product) return;

    // Simpan posisi scroll sebelum membuka modal
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden"; // Mencegah scroll tanpa mengubah posisi halaman
    document.body.setAttribute("data-scroll-position", scrollY);

    // Update modal content
        document.getElementById('modalTitle').textContent = product.name;
        document.getElementById('modalImage').src = product.image;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productScent').textContent = product.scent;
        document.getElementById('productLongevity').textContent = product.longevity;
        document.getElementById('productIntensity').textContent = product.intensity;
        
        // Update product notes
        const notesList = document.getElementById('productNotes');
        notesList.innerHTML = product.notes.map(note => 
            `<li class="text-sm">${note}</li>`
        ).join('');

        // Update variants
        const variantSelect = document.getElementById('variantSelect');
        variantSelect.innerHTML = '<option value="">Pilih berat kurma</option>' + 
            product.variants.map((v, i) => 
                `<option value="${i}">${v.size} - ${v.price}</option>`
            ).join('');

        document.getElementById('productModal').classList.remove('hidden');
    }

    // Handle variant selection
    document.getElementById('variantSelect').addEventListener('change', (e) => {
        const shopeeButton = document.getElementById('shopeeButton');
        const checkoutNote = document.getElementById('checkoutNote');
        
        if (e.target.value !== "") {
            // Show order button and hide note
            shopeeButton.classList.remove('hidden');
            checkoutNote.classList.add('hidden');
            
            // Update Shopee link
            const selectedProduct = products.find(p => p.name === document.getElementById('modalTitle').textContent);
            const selectedVariant = selectedProduct.variants[parseInt(e.target.value)];
            shopeeButton.onclick = () => window.open(selectedVariant.shopeeLink, '_blank');
        } else {
            // Hide order button and show note
            shopeeButton.classList.add('hidden');
            checkoutNote.classList.remove('hidden');
        }
    });

// Close modal
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('productModal').classList.add('hidden');

    // Ambil posisi terakhir sebelum modal dibuka
    const scrollY = document.body.getAttribute("data-scroll-position");
    
    // Aktifkan kembali scroll dan kembalikan posisi halaman
    document.body.style.overflow = ""; 
    window.scrollTo(0, parseInt(scrollY || "0"));
});
