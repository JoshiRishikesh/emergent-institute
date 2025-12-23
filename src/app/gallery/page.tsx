"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiPlayCircle, FiLayers, FiExternalLink, FiRefreshCw } from "react-icons/fi";

interface Post {
  id: string;
  permalink: string;
  mediaType: string;
  mediaUrl: string;
  thumbnailUrl?: string; // For Videos/Reels
  caption: string;
  prunedCaption: string;
  sizes: {
    large: { mediaUrl: string };
  };
}

interface InstagramData {
  username: string;
  biography: string;
  profilePictureUrl: string;
  followersCount: number;
  posts: Post[];
}

export default function GalleryPage() {
  const [data, setData] = useState<InstagramData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInstagram = async () => {
    setLoading(true);
    setError(null);
    
    const BEHOLD_URL = process.env.NEXT_PUBLIC_BEHOLD_URL;

    if (!BEHOLD_URL) {
      setError("API URL is missing in environment variables.");
      setLoading(false);
      return;
    }

    try {
      // Added a 10-second timeout to the fetch
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(BEHOLD_URL, { signal: controller.signal });
      clearTimeout(id);

      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      
      const payload = await res.json();
      setData(payload);
    } catch (err: any) {
      console.error("Fetch Detail:", err);
      if (err.name === 'AbortError') {
        setError("Request timed out. Please check your internet connection.");
      } else {
        setError("Could not connect to the Instagram feed. Check your Ad-blocker.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagram();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-slate-200 border-t-pink-600 rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium">Loading Emergent Gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
          <div className="text-red-500 mb-4 flex justify-center text-4xl">⚠️</div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">Connection Issue</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <button 
            onClick={fetchInstagram}
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition-all"
          >
            <FiRefreshCw /> Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Profile Header */}
      <section className="pt-24 pb-12 px-6 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-slate-100">
              <Image 
                src={data.profilePictureUrl} 
                alt={data.username} 
                fill 
                className="object-cover"
                unoptimized // Useful if external images fail to optimize
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <h1 className="text-2xl font-bold text-slate-900">@{data.username}</h1>
              <a 
                href={`https://instagram.com/${data.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors inline-flex items-center justify-center gap-2"
              >
                Follow <FiExternalLink />
              </a>
            </div>
            
            <div className="flex justify-center md:justify-start gap-10 mb-6">
              <span className="text-slate-900"><strong>{data.posts.length}</strong> posts</span>
              <span className="text-slate-900"><strong>{data.followersCount}</strong> followers</span>
            </div>
            
            <p className="text-slate-700 font-medium max-w-2xl leading-relaxed whitespace-pre-line">
              {data.biography}
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {data.posts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="group relative aspect-square bg-slate-200 rounded-xl overflow-hidden shadow-sm"
            >
              <Image
                src={post.mediaType === "VIDEO" ? (post.thumbnailUrl || post.sizes.large.mediaUrl) : post.sizes.large.mediaUrl}
                alt="Instagram content"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              
              <div className="absolute top-4 right-4 z-10 text-white drop-shadow-md">
                {post.mediaType === "VIDEO" && <FiPlayCircle size={24} />}
                {post.mediaType === "CAROUSEL_ALBUM" && <FiLayers size={24} />}
              </div>

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <p className="text-white text-xs font-semibold line-clamp-6 leading-relaxed">
                  {post.prunedCaption || post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}