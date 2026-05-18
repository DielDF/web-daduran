export async function GET(req: Request) {
    const {searchParams} = new URL (req.url);
    const lang = searchParams.get("lang") === "ES" ? "ES" : "EN";
    const projects = {
        EN: [
         {
            title: "daduran.dev",
            description: "Personal portfolio and technical demo built with Next.js and TailwindCSS",
            tech: " Next.js / Node.js / TailwindCSS ",
            image: "/images/website.png",
            link: "https://github.com/DielDF/web-daduran",
        },
        {
            title:"Airflow Dynamic Simulation",
            description: "Capstone project, used to simulate airflow in a CAD/CAM model. I focused on physics and software assimilation to client's own application.",
            tech : " Git / Java / C++ ",
            image: "/images/simulation4.png",
            link: "https://gitlab.com/DiegoD05/capstone-armarender",
        },
        {
            title: "Megaman Zero Recreation",
            description: "Course-related project and personal passion project of mine, built with Unity and C##.",
            tech: " 3D Modelling / Unity / C# ",
            image: "/images/megaman.png",
            link: "https://github.com/StudentD05/MegaManZeroRecreation",
        },
    ], ES : [
        {
            title: "daduran.dev",
            description: "Portafolio personal y demostración técnica creada con Next.js y TailWindCSS.",
            tech: " Next.js / Node.js / TailwindCSS ",
            image: "/images/website.png",
            link: "https://github.com/DielDF/web-daduran",
        },
        {
            title:"Simulacion de Flujo de Aire Dinámica",
            description: "Projecto Capstone, hecho para simular flujo de aire en un modelo CAD/CAM. Yo me enfoque en el aspecto de la física requerida y la asimilación del programa al pedido de mi cliente.",
            tech : " Git / Java / C++ ",
            image: "/images/simulation4.png",
            link: "https://gitlab.com/DiegoD05/capstone-armarender",
        },
        {
            title: "Megaman Zero Recreation",
            description: "Projecto académico y personal, creado con Unity y C++, basado en un juego de mi niñez.",
            tech: " 3D Modelling / Unity / C# ",
            image: "/images/megaman.png",
            link: "https://github.com/StudentD05/MegaManZeroRecreation",
        },
    ]
    }
    return Response.json(projects[lang]);
}