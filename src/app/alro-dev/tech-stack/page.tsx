"use client";
import { Icon } from "@iconify/react";
import { iconsName } from "../../lib/techstack";
import React, { useState } from "react";

export default function TechStack() {
  return (
    <div className="w-full min-h-[calc(100dvh-80px)] py-12 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pri-4">
            My Tech Stack
          </h1>
          <p className="text-lg text-pri-1 max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </div>
        <TechCards />
      </div>
    </div>
  );
}

const TechCards = () => {
  // Group technologies by category for better organization
  const databases = iconsName.filter((item) =>
    [
      "Firebase",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "MySQL",
      "Paymongo",
    ].includes(item.name)
  );

  const languages = iconsName.filter((item) =>
    ["TypeScript", "JavaScript", "PHP"].includes(item.name)
  );

  const frontend = iconsName.filter((item) =>
    [
      "Angular",
      "SolidJS",
      "Next.js",
      "Svelte",
      "React",
      "Vue.js",
      "Tailwind CSS",
      "Sass",
      "CSS3",
    ].includes(item.name)
  );

  const backend = iconsName.filter((item) =>
    ["Laravel", "Express", "Node.js"].includes(item.name)
  );

  const tools = iconsName.filter((item) =>
    ["Git", "Docker", "AWS"].includes(item.name)
  );

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <CategorySection title="Languages" items={languages} />
        <CategorySection title="Frontend" items={frontend} />
        <CategorySection title="Backend" items={backend} />
        <CategorySection title="Databases" items={databases} />
        <CategorySection title="Tools & Cloud" items={tools} />
      </div>
    </div>
  );
};

const CategorySection = ({
  title,
  items,
}: {
  title: string;
  items: typeof iconsName;
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-pri-3/30 hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-sec-4 inline-block text-pri-4">
        {title}
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <TechCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const TechCard = ({ item }: { item: (typeof iconsName)[0] }) => {
  const [iconFailed, setIconFailed] = useState(false);
  
  // Check if the icon is a local image path
  const isLocalImage = item.icon.startsWith('/');
  
  // Generate a fallback image URL for devicons with proper naming
  const deviconName = item.name
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/\./g, '')
    .replace(/js$/, 'js')
    .replace(/css$/, 'css')
    .replace(/^aws$/, 'amazonwebservices')
    .replace(/^git$/, 'git')
    .replace(/^docker$/, 'docker')
    .replace(/^laravel$/, 'laravel')
    .replace(/^express$/, 'express')
    .replace(/^nodejs$/, 'nodejs')
    .replace(/^mongodb$/, 'mongodb')
    .replace(/^mysql$/, 'mysql')
    .replace(/^postgresql$/, 'postgresql')
    .replace(/^firebase$/, 'firebase')
    .replace(/^supabase$/, 'supabase')
    .replace(/^typescript$/, 'typescript')
    .replace(/^javascript$/, 'javascript')
    .replace(/^php$/, 'php')
    .replace(/^angular$/, 'angularjs')
    .replace(/^react$/, 'react')
    .replace(/^vuejs$/, 'vuejs')
    .replace(/^svelte$/, 'svelte')
    .replace(/^nextjs$/, 'nextjs')
    .replace(/^solidjs$/, 'solidjs')
    .replace(/^tailwindcss$/, 'tailwindcss')
    .replace(/^sass$/, 'sass')
    .replace(/^css3$/, 'css3')
    .replace(/^paymongo$/, 'paymongo');

  const fallbackImageUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconName}/${deviconName}-original.svg`;

  return (
    <div className="flex flex-col items-center p-3 rounded-xl bg-pri-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="w-16 h-16 flex items-center justify-center mb-3">
        {isLocalImage ? (
          // Render local images with img tag
          <img 
            src={item.icon} 
            alt={item.name} 
            width="48" 
            height="48" 
            className="rounded-lg object-contain"
          />
        ) : iconFailed ? (
          <img 
            src={fallbackImageUrl} 
            alt={item.name} 
            width="48" 
            height="48" 
            className="rounded-lg object-contain"
            onError={(e) => {
              // If devicon also fails, we show a simple text fallback
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        ) : (
          <Icon 
            icon={item.icon} 
            width="48" 
            height="48" 
            className="text-pri-4 group-hover:text-pri-2 transition-colors duration-300"
          />
        )}
      </div>
      <span className="text-center font-medium text-sm text-pri-4 group-hover:text-pri-2 transition-colors duration-300">
        {item.name}
      </span>
    </div>
  );
};
