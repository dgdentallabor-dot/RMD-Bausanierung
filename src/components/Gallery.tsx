import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { X, Upload, Eye, Calendar, MapPin, Grid, Layers, Check } from 'lucide-react';
import ImageLightbox from './ImageLightbox';

export default function Gallery() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Dynamic Image Upload State
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState('Bathroom');
  const [uploadTags, setUploadTags] = useState('');
  const [uploadLocation, setUploadLocation] = useState('Stuttgart');
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);

  const t = {
    badgeText: "UNSERE REFERENZEN",
    heading: "Galerie vollendeter Projekte",
    all: "Alle Projekte",
    bath: "Bäder",
    interior: "Innenausbau",
    flooring: "Böden",
    stairs: "Treppen",
    beforeLabel: "Vorher",
    afterLabel: "Nachher",
    toggleSlider: "Interaktiver Vorher/Nachher Vergleich",
    sliderHint: "Ziehen Sie den Schieberegler",
    uploadTitleBtn: "Eigenes Foto hochladen",
    lightboxLoc: "Ort",
    lightboxYear: "Baujahr",
    lightboxSize: "Fläche",
    uploadModalTitle: "Projektfoto zur Galerie hinzufügen",
    uploadFormTitle: "Projekttitel",
    uploadFormCategory: "Kategorie",
    uploadFormTags: "Schlagwörter (mit Komma trennen)",
    uploadFormLoc: "Standort",
    uploadFormFile: "Datei auswählen oder reinziehen",
    uploadSubmit: "Projekt hinzufügen",
    uploadSuccess: "Projekt erfolgreich hinzugefügt!",
    tagsLabel: "Spezifikationen",
    close: "Schließen"
  };

  const categories: string[] = ['All', 'Bathroom', 'Interior', 'Flooring', 'Stairs'];

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Client-Side Image Upload Handling
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !uploadTitle) return;

    const newProject: Project = {
      id: `custom-project-${Date.now()}`,
      title: uploadTitle,
      category: uploadCategory,
      description: `Fachgerecht umgesetztes Kundenprojekt in ${uploadLocation}. Ausgeführt nach deutschen Qualitätsstandards.`,
      image: selectedFile,
      location: uploadLocation,
      year: new Date().getFullYear().toString(),
      size: "Individuell",
      tags: uploadTags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    setProjects([newProject, ...projects]);
    setShowUploadForm(false);
    setSelectedFile(null);
    setUploadTitle('');
    setUploadTags('');
  };

  return (
    <section id="gallery" className="relative py-28 bg-matte-black border-t border-white/10 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with dynamic upload button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-gold"></span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-gold uppercase font-bold">
                {t.badgeText}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight uppercase">
              {t.heading}
            </h2>
            <div className="h-[1.5px] w-20 bg-gold mt-4"></div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowUploadForm(true)}
              className="px-5 py-2.5 bg-white/5 hover:bg-gold text-gray-300 hover:text-matte-black border border-white/10 hover:border-gold text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Upload size={14} />
              <span>{t.uploadTitleBtn}</span>
            </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-none transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gold text-matte-black'
                  : 'bg-zinc-900/40 text-gray-400 hover:text-white hover:bg-zinc-900 border border-white/5'
              }`}
            >
              {cat === 'All' ? t.all : cat === 'Bathroom' ? t.bath : cat === 'Interior' ? t.interior : cat === 'Flooring' ? t.flooring : t.stairs}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-zinc-900/40 border border-white/10 hover:border-gold/50 rounded-none overflow-hidden transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Hover Eye Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <div className="w-12 h-12 bg-gold text-matte-black flex items-center justify-center border border-white/10 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye size={18} />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-matte-black/90 backdrop-blur-sm border border-white/10 text-[9px] font-mono tracking-widest uppercase text-gold font-bold">
                  {project.category === 'Bathroom' ? 'Bäder' : project.category}
                </span>

                {/* Compare badge if has before image */}
                {project.beforeImage && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 bg-gold/90 text-matte-black font-mono font-bold text-[8px] uppercase tracking-wider flex items-center gap-1">
                    <Layers size={10} />
                    Vorher / Nachher
                  </span>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2 font-serif group-hover:text-gold transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-gold" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={11} className="text-gold" />
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Grid size={11} className="text-gold" />
                    {project.size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Lightbox Component with Full Screen Capability */}
      {selectedProject && (
        <ImageLightbox
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          image={selectedProject.image}
          beforeImage={selectedProject.beforeImage}
          title={selectedProject.title}
          category={selectedProject.category}
          description={selectedProject.description}
          location={selectedProject.location}
          year={selectedProject.year}
          size={selectedProject.size}
          tags={selectedProject.tags}
        />
      )}

      {/* Client Upload Modal */}
      <AnimatePresence>
        {showUploadForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUploadForm(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-matte-black border border-white/15 rounded-none p-6 sm:p-8 shadow-2xl z-10 text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold">
                  {t.uploadModalTitle}
                </span>
                <button
                  onClick={() => setShowUploadForm(false)}
                  className="p-1 text-gray-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleAddProject} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    {t.uploadFormTitle} *
                  </label>
                  <input
                    type="text"
                    required
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    placeholder="z.B. Luxusbad Killesberg"
                    className="w-full px-3 py-2 bg-zinc-900 border border-white/10 text-xs text-white rounded-none focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                      {t.uploadFormCategory}
                    </label>
                    <select
                      value={uploadCategory}
                      onChange={(e) => setUploadCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-900 border border-white/10 text-xs text-white rounded-none focus:outline-none focus:border-gold"
                    >
                      <option value="Bathroom">Bäder</option>
                      <option value="Interior">Innenausbau</option>
                      <option value="Flooring">Böden</option>
                      <option value="Stairs">Treppen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                      {t.uploadFormLoc}
                    </label>
                    <input
                      type="text"
                      value={uploadLocation}
                      onChange={(e) => setUploadLocation(e.target.value)}
                      placeholder="z.B. Bad Urach"
                      className="w-full px-3 py-2 bg-zinc-900 border border-white/10 text-xs text-white rounded-none focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    {t.uploadFormTags}
                  </label>
                  <input
                    type="text"
                    value={uploadTags}
                    onChange={(e) => setUploadTags(e.target.value)}
                    placeholder="Feinsteinzeug, Gehrungsschnitt, Dusche"
                    className="w-full px-3 py-2 bg-zinc-900 border border-white/10 text-xs text-white rounded-none focus:outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Foto auswählen *
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 bg-zinc-900 border border-white/10 text-xs text-gray-400 rounded-none file:mr-4 file:py-1 file:px-3 file:border-0 file:text-[10px] file:font-mono file:bg-gold file:text-matte-black hover:file:cursor-pointer"
                  />
                </div>

                {selectedFile && (
                  <div className="h-32 w-full overflow-hidden border border-gold/30 mt-2">
                    <img src={selectedFile} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!selectedFile || !uploadTitle}
                  className="w-full py-3 bg-gold hover:bg-gold-dark text-matte-black font-black uppercase tracking-wider text-xs rounded-none transition-colors mt-6 cursor-pointer disabled:opacity-50"
                >
                  {t.uploadSubmit}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
