import{A as e}from"./UIcon.Bs_YUxjo.js";function d(r,...t){const i=Object.assign({},r);return Object.keys(i).forEach(a=>{t.includes(a)&&delete i[a]}),i}const o=r=>r,g=[o({name:"System Administration",slug:"sysadmin",order:1}),o({name:"DevOps",slug:"devops",order:2}),o({name:"Programming Languages",slug:"pro-lang",order:3}),o({name:"Frameworks Backend",slug:"framework-backend",order:4}),o({name:"Libraries Frontend ",slug:"library-frontend",order:5}),o({name:"Languages",slug:"lang",order:6}),o({name:"Databases",slug:"db",order:7}),o({name:"ORMs",slug:"orm",order:8}),o({name:"Testing",slug:"test",order:9}),o({name:"Markup & Style",slug:"markup-style",order:10}),o({name:"Dev Tools",slug:"devtools",order:11}),o({name:"Design",slug:"design",order:12}),o({name:"Soft Skills",slug:"soft",order:13})],s=r=>{const t=d(r,"category");return r.category&&(t.category=g.find(i=>i.slug===r.category)),t},u=[s({slug:"js",color:"yellow",description:"JavaScript est un langage de programmation que j’ai utilisé dans divers projets front-end pour créer des interfaces interactives et dynamiques.",logo:e.JavaScript,name:"JavaScript",category:"pro-lang"}),s({slug:"ts",color:"blue",description:"TypeScript est un sur-ensemble typé de JavaScript que j’ai utilisé pour améliorer la robustesse et la maintenabilité du code.",logo:e.TypeScript,name:"TypeScript",category:"pro-lang"}),s({slug:"sass",color:"pink",description:"Sass est un préprocesseur CSS que j’ai employé pour structurer et gérer efficacement les styles complexes dans mes projets.",logo:e.Sass,name:"Sass",category:"markup-style"}),s({slug:"reactjs",color:"cyan",description:"React est une bibliothèque JavaScript que j’ai utilisée pour développer des interfaces utilisateur réactives et modulaires.",logo:e.ReactJs,name:"React Js",category:"library-frontend"}),s({slug:"node",color:"green",description:"Node.js est une plateforme JavaScript côté serveur que j’ai exploitée pour construire des applications backend performantes.",logo:e.NodeJs,name:"NodeJs",category:"pro-lang"}),s({slug:"express",color:"green",description:"Express.js est un framework pour Node.js que j’ai utilisé pour développer des APIs RESTful et des applications web robustes.",logo:e.ExpressJs,name:"ExpressJs",category:"framework-backend"}),s({slug:"java",color:"blue",description:"Java est un langage de programmation que j’ai utilisé dans le développement d’applications Android et d’applications backend robustes.",logo:e.Java,name:"Java",category:"pro-lang"}),s({slug:"spring-boot",color:"green",description:"Spring Boot est un framework Java que j’ai utilisé pour développer des applications backend robustes et évolutives.",logo:e.SpringBoot,name:"Spring Boot",category:"framework-backend"}),s({slug:"mysql",color:"blue",description:"MySQL est un système de gestion de bases de données relationnelles que j’ai utilisé pour gérer des données structurées dans mes projets.",logo:e.MySql,name:"MySQL",category:"db"}),s({slug:"postgres",color:"blue",description:"PostgreSQL est un système de gestion de bases de données open-source que j’ai utilisé pour des applications nécessitant une gestion avancée des données.",logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),s({slug:"prisma",color:"blue",description:"Prisma est un ORM moderne que j’ai utilisé pour simplifier les interactions entre l’application et la base de données.",logo:e.Prisma,name:"Prisma",category:"orm"}),s({slug:"jest",color:"red",description:"Jest est un framework de test JavaScript que j’ai utilisé pour assurer la qualité et la fiabilité du code dans mes projets.",logo:e.Jest,name:"Jest",category:"test"}),s({slug:"ansible",color:"orange",description:"Ansible est un outil d’automatisation que j’ai utilisé pour orchestrer le déploiement et la configuration des serveurs.",logo:e.Ansible,name:"Ansible",category:"devops"}),s({slug:"kubernetes",color:"blue",description:"Kubernetes est un système d’orchestration de conteneurs que j’ai utilisé pour gérer le déploiement et la mise à l’échelle d’applications containerisées.",logo:e.Kubernetes,name:"Kubernetes",category:"devops"}),s({slug:"grafana",color:"orange",description:"Grafana est un outil de surveillance et de visualisation que j’ai utilisé pour surveiller la performance des systèmes et applications.",logo:e.Grafana,name:"Grafana",category:"devops"}),s({slug:"prometheus",color:"orange",description:"Prometheus est un système de surveillance open-source que j’ai utilisé pour collecter et analyser les métriques des applications.",logo:e.Prometheus,name:"Prometheus",category:"devops"}),s({slug:"alertmanager",color:"orange",description:"Alert Manager est un outil de gestion des alertes que j’ai utilisé en conjonction avec Prometheus pour gérer les notifications des incidents.",logo:e.Prometheus,name:"Alert Manager",category:"devops"}),s({slug:"tailwindcss",color:"blue",description:"Tailwind CSS est un framework CSS utilitaire que j’ai utilisé pour créer des interfaces utilisateur modernes et réactives.",logo:e.Tailwind,name:"Tailwind",category:"markup-style"}),s({slug:"linux",color:"orange",description:"Linux est un système d’exploitation open-source que j’ai utilisé pour gérer les serveurs et les environnements de développement.",logo:e.Linux,name:"Linux",category:"sysadmin"}),s({slug:"nginx",color:"green",description:"Nginx est un serveur web et reverse proxy que j’ai utilisé pour servir des applications web de manière performante.",logo:e.Nginx,name:"Nginx",category:"others"}),s({slug:"android",color:"green",description:"Android est un système d’exploitation mobile que j’ai utilisé pour développer des applications mobiles natives.",logo:e.Android,name:"Android",category:"others"}),s({slug:"ruby-on-rails",color:"red",description:"Ruby on Rails est un framework web que j’ai utilisé pour développer des applications web robustes et scalables.",logo:e.Rails,name:"Ruby on Rails",category:"framework-backend"}),s({slug:"grpc",color:"blue",description:"gRPC est un framework RPC open-source que j’ai utilisé pour implémenter des services backend efficaces et performants.",logo:e.Grpc,name:"gRPC",category:"framework-backend"}),s({slug:"docker",color:"blue",description:"Docker est une plateforme de virtualisation que j’ai utilisé pour containeriser des applications afin de faciliter leur déploiement.",logo:e.Docker,name:"Docker",category:"framework-backend"})],m="Skills",y=(...r)=>u.filter(t=>r.includes(t.slug)),b=r=>{const t=[],i=[];return u.forEach(a=>{if(r.trim()&&!a.name.toLowerCase().includes(r.trim().toLowerCase()))return;if(!a.category){i.push(a);return}let n=t.find(c=>{var l;return c.category.slug===((l=a.category)==null?void 0:l.slug)});n||(n={items:[],category:a.category},t.push(n)),n.items.push(a)}),i.length!==0&&t.push({category:{name:"Others",slug:"others",order:14},items:i}),t.sort((a,n)=>a.category.order-n.category.order),t};export{b as a,y as g,u as i,m as t};
