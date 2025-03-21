// for chart
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('trendsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2023', '2024', '2025', '2026', '2027'],
            datasets: [{
                label: 'Digital Learning Adoption',
                data: [30, 45, 60, 75, 85],
                borderColor: '#3498db',
                tension: 0.3
            }, {
                label: 'AI Integration',
                data: [10, 25, 40, 60, 70],
                borderColor: '#2ecc71',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    //  bars
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
    });

    //  EdTech Chart
    const ctxEdTech = document.getElementById('edTechChart');
    if (ctxEdTech) {
        new Chart(ctxEdTech, {
            type: 'line',
            data: {
                labels: ['2022', '2023', '2024', '2025', '2026', '2027'],
                datasets: [{
                    label: 'Digital Learning Adoption',
                    data: [45, 60, 75, 85, 90, 95],
                    borderColor: '#003366',
                    backgroundColor: 'rgba(0, 51, 102, 0.1)',
                    tension: 0.4
                }, {
                    label: 'Teacher Digital Proficiency',
                    data: [40, 55, 70, 80, 85, 90],
                    borderColor: '#6C63FF',
                    backgroundColor: 'rgba(108, 99, 255, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    
    const ctx = document.getElementById('edTechChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2022', '2023', '2024', '2025', '2026', '2027'],
                datasets: [{
                    label: 'Digital Learning Adoption',
                    data: [45, 60, 75, 85, 90, 95],
                    borderColor: '#003366',
                    backgroundColor: 'rgba(0, 51, 102, 0.1)',
                    tension: 0.4
                }, {
                    label: 'Teacher Digital Proficiency',
                    data: [40, 55, 70, 80, 85, 90],
                    borderColor: '#6C63FF',
                    backgroundColor: 'rgba(108, 99, 255, 0.1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        });
    }
});