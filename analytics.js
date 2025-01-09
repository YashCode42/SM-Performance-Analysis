// analytics.js
class AnalyticsManager {
    constructor(astraConfig, langflowConfig) {
        this.astraConfig = astraConfig;
        this.langflowConfig = langflowConfig;
    }

    // एनालिटिक्स डेटा फेच करें
    async fetchAnalytics() {
        try {
            const response = await fetch(`${this.astraConfig.endpoint}/analytics`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('एनालिटिक्स फेच करने में त्रुटि:', error);
            throw error;
        }
    }

    // चार्ट्स अपडेट करें
    updateCharts(data) {
        // परफॉर्मेंस चार्ट अपडेट करें
        const performanceChart = new Chart(
            document.getElementById('performanceChart'),
            {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        data: data.values,
                        backgroundColor: 'rgb(59, 130, 246)'
                    }]
                }
            }
        );

        // ट्रेंड चार्ट अपडेट करें
        const trendChart = new Chart(
            document.getElementById('trendChart'),
            {
                type: 'line',
                data: {
                    labels: data.timeLabels,
                    datasets: [{
                        data: data.trendValues,
                        borderColor: 'rgb(59, 130, 246)'
                    }]
                }
            }
        );
    }
}