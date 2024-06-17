const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['html', 'css', 'javascript', 'react', 'outro', 'outro'],
        datasets: [{
            label: 'evolução',

            data: [90, 80, 60, 10, 1, 1],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // HTML
                'rgba(54, 162, 235, 0.2)', // CSS
                'rgba(255, 206, 86, 0.2)', // JavaScript
                'rgba(75, 192, 192, 0.2)', // React
                'rgba(153, 102, 255, 0.2)', // Outro1
                'rgba(255, 159, 64, 0.2)'  // Outro2
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)', // HTML
                'rgba(54, 162, 235, 1)', // CSS
                'rgba(255, 206, 86, 1)', // JavaScript
                'rgba(75, 192, 192, 1)', // React
                'rgba(153, 102, 255, 1)', // Outro1
                'rgba(255, 159, 64, 1)'  // Outro2
            ]
        }]

    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const Inicio = document.querySelector(".Inicio");
    const Projetos = document.querySelector(".Projetos");
    const Sobre = document.querySelector(".Sobre");
    const ContainerPrincipal = document.querySelector(".Container-Principal");
    const ContainerProjetos = document.querySelector(".Container-Projetos");
    const ContainerSobre = document.querySelector(".Container-Sobre");

    Inicio.addEventListener("click", () => {
        ContainerPrincipal.scrollIntoView({ behavior: "smooth" });
    });

    Projetos.addEventListener("click", () => {
        ContainerProjetos.scrollIntoView({ behavior: "smooth" });
    });

    Sobre.addEventListener("click", () => {
        ContainerSobre.scrollIntoView({ behavior: "smooth" });
    });



});