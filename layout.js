// Add dark theme styles
const darkTheme = {
    body: 'bg-gray-900 text-white',
    sidebar: 'bg-gray-800 border-gray-700',
    card: 'bg-gray-800 border-gray-700',
    hover: 'hover:bg-gray-700',
    input: 'bg-gray-700 border-gray-600 text-white',
    table: {
        header: 'bg-gray-800',
        row: 'border-gray-700 hover:bg-gray-700'
    }
};

// Common dashboard layout elements
const dashboardLayout = {
    sidebar: `
        <aside class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800 border-r border-gray-700">
                <h2 class="text-xl font-bold mb-6 px-2 text-white">Social Analytics</h2>
                <ul class="space-y-2">
                    <li>
                        <a href="index.html" class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <i class="bi bi-speedometer2 mr-3"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="analytics.html" class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <i class="bi bi-graph-up mr-3"></i>
                            <span>Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="audience.html" class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <i class="bi bi-people mr-3"></i>
                            <span>Audience</span>
                        </a>
                    </li>
                    <li>
                        <a href="competitors.html" class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <i class="bi bi-bar-chart mr-3"></i>
                            <span>Competitors</span>
                        </a>
                    </li>
                    <li>
                        <a href="profile.html" class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <img width="20" height="20" src="https://img.icons8.com/fluency-systems-regular/50/user-male-circle--v1.png" alt="profile" class="mr-3">
                            <span>Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="export-data.html" class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/settings--v1.png" alt="export" class="mr-3"/>
                            <span>Export Data</span>
                        </a>
                    </li>
                    <li>
                        <a href="manage-profile.html" class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-700">
                            <i class="bi bi-person-circle mr-3"></i>
                            <span>Manage Profile</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    `,

    topStats: `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-gray-400">Total Engagement</span>
                    <i class="bi bi-hand-thumbs-up text-blue-500"></i>
                </div>
                <h3 class="text-2xl font-bold text-white">24.5K</h3>
                <p class="text-green-500 text-sm"><i class="bi bi-arrow-up"></i> 12% vs last month</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-gray-400">Followers</span>
                    <i class="bi bi-people text-purple-500"></i>
                </div>
                <h3 class="text-2xl font-bold text-white">12.8K</h3>
                <p class="text-green-500 text-sm"><i class="bi bi-arrow-up"></i> 8% vs last month</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-gray-400">Posts</span>
                    <i class="bi bi-grid text-orange-500"></i>
                </div>
                <h3 class="text-2xl font-bold text-white">156</h3>
                <p class="text-red-500 text-sm"><i class="bi bi-arrow-down"></i> 3% vs last month</p>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-gray-400">Engagement Rate</span>
                    <i class="bi bi-graph-up text-green-500"></i>
                </div>
                <h3 class="text-2xl font-bold text-white">5.2%</h3>
                <p class="text-green-500 text-sm"><i class="bi bi-arrow-up"></i> 1.5% vs last month</p>
            </div>
        </div>
    `
};

// Initialize dashboard layout with dark theme
function initDashboard(currentPage) {
    // Apply dark theme to body
    document.body.classList.add('bg-gray-900', 'text-white');

    // Insert sidebar
    document.querySelector('aside').innerHTML = dashboardLayout.sidebar;
    
    // Set active page in sidebar
    const activeLink = document.querySelector(`a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('bg-gray-700');
    }

    // Add top stats if main content exists
    const mainContent = document.querySelector('main');
    if (mainContent) {
        const topStatsContainer = document.createElement('div');
        topStatsContainer.innerHTML = dashboardLayout.topStats;
        mainContent.insertBefore(topStatsContainer, mainContent.firstChild);
    }

    // Apply dark theme to all cards
    document.querySelectorAll('.bg-white').forEach(el => {
        el.classList.remove('bg-white');
        el.classList.add('bg-gray-800', 'border-gray-700');
    });

    // Apply dark theme to inputs
    document.querySelectorAll('input, select').forEach(el => {
        el.classList.add('bg-gray-700', 'border-gray-600', 'text-white');
    });

    // Apply dark theme to tables
    document.querySelectorAll('table').forEach(table => {
        table.querySelectorAll('thead').forEach(thead => {
            thead.classList.add('bg-gray-800');
        });
        table.querySelectorAll('tr').forEach(tr => {
            tr.classList.add('border-gray-700', 'hover:bg-gray-700');
        });
    });
}

// Add theme toggle functionality
function addThemeToggle() {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'fixed bottom-4 right-4 p-2 rounded-full bg-gray-700 text-white';
    toggleButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
    toggleButton.onclick = toggleTheme;
    document.body.appendChild(toggleButton);
}

function toggleTheme() {
    const isDark = document.body.classList.contains('bg-gray-900');
    if (isDark) {
        // Switch to light theme
        document.body.classList.remove('bg-gray-900', 'text-white');
        // ... remove other dark theme classes
    } else {
        // Switch to dark theme
        document.body.classList.add('bg-gray-900', 'text-white');
        // ... add other dark theme classes
    }
}

// Export functions
window.initDashboard = initDashboard;
window.addThemeToggle = addThemeToggle; 