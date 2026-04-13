import React, { useEffect, useState } from "react";
import lodash from "lodash";
import { Flipped, Flipper } from "react-flip-toolkit";
import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiWordpress,
  SiGit,
  SiGithub,
  SiPrisma,
  SiJsonwebtokens,
  SiLinux,
  SiJest,
  SiGithubactions,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";
import { CgVercel } from "react-icons/cg";
import { LinkPreview } from "./ui/link-preview";

const Skills: React.FC = () => {
  const skillItems = [
    {
      title: "C",
      icon: <SiC className="text-blue-600" />,
      link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      title: "C++",
      icon: <SiCplusplus className="text-blue-700" />,
      link: "https://isocpp.org/",
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      link: "https://www.typescriptlang.org/",
    },
    {
      title: "Next.js",
      icon: <TbBrandNextjs className="text-black dark:text-white" />,
      link: "https://nextjs.org/",
    },
    {
      title: "NestJS",
      icon: <SiNestjs className="text-red-600" />,
      link: "https://nestjs.com/",
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-400" />,
      link: "https://www.postgresql.org/",
    },
    {
      title: "Docker",
      icon: <SiDocker className="text-blue-500" />,
      link: "https://www.docker.com/",
    },
    {
      title: "Kubernetes",
      icon: <SiKubernetes className="text-blue-600" />,
      link: "https://kubernetes.io/",
    },
    {
      title: "Vercel",
      icon: <CgVercel className="text-black dark:text-white" />,
      link: "https://vercel.com/",
    },
    {
      title: "WordPress",
      icon: <SiWordpress className="text-blue-800" />,
      link: "https://wordpress.org/",
    },
    {
      title: "Git",
      icon: <SiGit className="text-orange-500" />,
      link: "https://git-scm.com/",
    },
    {
      title: "GitHub",
      icon: <SiGithub className="text-black dark:text-white" />,
      link: "https://github.com/",
    },
    {
      title: "REST APIs",
      icon: <FaNetworkWired className="text-green-500" />,
      link: "https://restfulapi.net/",
    },
    {
      title: "Prisma",
      icon: <SiPrisma className="text-black dark:text-white" />,
      link: "https://www.prisma.io/",
    },
    {
      title: "JWT",
      icon: <SiJsonwebtokens className="text-pink-500" />,
      link: "https://jwt.io/",
    },
    {
      title: "Linux",
      icon: <SiLinux className="text-yellow-500" />,
      link: "https://www.linux.org/",
    },
    {
      title: "Jest",
      icon: <SiJest className="text-red-500" />,
      link: "https://jestjs.io/",
    },
    {
      title: "GitHub Actions",
      icon: <SiGithubactions className="text-blue-500" />,
      link: "https://github.com/features/actions",
    },
  ];

  const [items, setItems] = useState(skillItems);

  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const newShuffledItems = lodash.shuffle(items);
      setItems(newShuffledItems);
    }, 3000); // Shuffle every 3 seconds

    return () => clearInterval(shuffleInterval);
  }, [items]);

  return (
    <div className="container mx-auto py-12 flex flex-col items-center">
      <Flipper flipKey={items.map((item) => item.title).join("")}>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-6 w-full">
          {items.map((item) => (
            <Flipped key={item.title} flipId={item.title}>
              <div className="w-full p-3 gap-1 flex flex-col justify-center items-center">
                <LinkPreview url={item.link}>
                  <div className="text-4xl mb-2">{item.icon}</div>
                </LinkPreview>
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 text-center">
                  {item.title}
                </h3>
              </div>
            </Flipped>
          ))}
        </div>
      </Flipper>
    </div>
  );
};

export default Skills;
