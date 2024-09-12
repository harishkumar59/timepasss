// Sample data for AI websites
const aiWebsites = [
    {
        name: "OpenAI",
        description: "Artificial intelligence research laboratory consisting of the for-profit corporation OpenAI LP and its parent company, the non-profit OpenAI Inc.",
        url: "https://openai.com",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "freemium",
        hashtags: ["AI", "Research", "GPT"]
    },
    {
        name: "DeepMind",
        description: "World leader in artificial intelligence research and its application for positive impact.",
        url: "https://www.deepmind.com",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "free",
        hashtags: ["AI", "Research", "DeepLearning"]
    },
    {
        name: "IBM Watson",
        description: "AI platform for business, offering pre-built applications and tools to build, run and manage AI models.",
        url: "https://www.ibm.com/watson",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "paid",
        hashtags: ["AI", "Business", "Analytics"]
    },
    {
        name: "Google AI",
        description: "Google's initiative to make AI accessible to everyone and to use AI to solve important problems.",
        url: "https://ai.google",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "freemium",
        hashtags: ["AI", "MachineLearning", "TensorFlow"]
    },
    {
        name: "Microsoft AI",
        description: "Microsoft's AI technologies and innovations to amplify human ingenuity.",
        url: "https://www.microsoft.com/en-us/ai",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "trial",
        hashtags: ["AI", "Azure", "Cognitive"]
    },
    {
        name: "AI for Good",
        description: "Global platform that fosters the dialogue on the beneficial use of AI by developing concrete projects.",
        url: "https://aiforgood.itu.int",
        image: "/placeholder.svg?height=40&width=40",
        pricing: "free",
        hashtags: ["AI", "SocialGood", "Innovation"]
    }
];

// DOM element references
const websiteGrid = document.getElementById('websiteGrid');
const searchInput = document.getElementById('searchInput');
const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

// Function to render AI website cards
function renderWebsites(websites) {
    websiteGrid.innerHTML = '';
    websites.forEach(website => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="pricing-indicator ${website.pricing}">${website.pricing}</div>
            <div class="card-header">
                <div class="card-title">
                    <img src="${website.image}" alt="${website.name} logo" class="card-image">
                    <h2>${website.name}</h2>
                </div>
            </div>
            <p>${website.description}</p>
            <div class="card-footer">
                <div class="hashtags">
                    ${website.hashtags.map(tag => `<span class="hashtag">#${tag}</span>`).join('')}
                </div>
                <a href="${website.url}" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
        `;
        websiteGrid.appendChild(card);
    });
}

// Function to filter websites based on search input
function filterWebsites() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredWebsites = aiWebsites.filter(website =>
        website.name.toLowerCase().includes(searchTerm) ||
        website.description.toLowerCase().includes(searchTerm) ||
        website.hashtags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    renderWebsites(filteredWebsites);
}

// Event listener for search input
searchInput.addEventListener('input', filterWebsites);

// Event listener for mobile menu toggle
menuButton.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// Initial render of all websites
renderWebsites(aiWebsites);