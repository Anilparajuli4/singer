import React, { useState } from 'react';
import { Music, Youtube, Instagram, Facebook, Twitter, Mail, Play } from 'lucide-react';

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

export default function SingerPortfolio() {
  const [activeVideo, setActiveVideo] = useState(0);

  // Add style to remove default body margin and prevent horizontal scroll
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflowX = 'hidden';
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflowX = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.documentElement.style.overflowX = '';
    };
  }, []);

  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Latest Single - Official Music Video' },
    { id: 'kJQP7kiw5Fk', title: 'Live Performance at Madison Square' },
    { id: '9bZkp7q19f0', title: 'Acoustic Sessions' }
  ];

  const socialLinks = [
    { icon: Youtube, label: 'YouTube', url: 'https://youtube.com', color: 'hover:text-red-500' },
    { icon: SpotifyIcon, label: 'Spotify', url: 'https://spotify.com', color: 'hover:text-green-500' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com', color: 'hover:text-pink-500' },
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com', color: 'hover:text-blue-500' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com', color: 'hover:text-sky-400' }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white m-0 p-0">
      {/* Header */}
      <header className="w-full px-6 py-6">
        <nav className="w-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Music className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold">Sarah Melody</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#videos" className="hover:text-purple-400 transition">Videos</a>
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="w-full px-6 py-20 text-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
            <Music className="w-24 h-24 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Sarah Melody
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Singer • Songwriter • Performer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            Bringing soulful melodies and heartfelt lyrics to stages around the world. 
            Experience music that touches the heart and moves the soul.
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 transform hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section id="videos" className="w-full px-4 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <Youtube className="inline-block w-10 h-10 mr-3 text-red-500" />
            Latest Videos
          </h2>
          
          {/* Main Video Player */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videos[activeVideo].id}`}
                title={videos[activeVideo].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="bg-gray-900 p-4">
              <h3 className="text-xl font-semibold">{videos[activeVideo].title}</h3>
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, idx) => (
              <button
                key={idx}
                onClick={() => setActiveVideo(idx)}
                className={`group relative rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                  activeVideo === idx ? 'ring-4 ring-purple-500' : ''
                }`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <p className="text-sm font-medium line-clamp-2">{video.title}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Youtube className="w-5 h-5" />
              <span>Subscribe on YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full px-4 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto bg-black bg-opacity-30 rounded-3xl p-8 lg:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With over a decade of experience in the music industry, I've had the privilege of 
              performing at venues across the globe and collaborating with incredible artists. 
              My music blends contemporary pop with soulful melodies, creating a unique sound 
              that resonates with audiences of all ages.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not in the studio or on stage, I love connecting with fans through 
              social media and sharing behind-the-scenes glimpses of my musical journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full px-4 lg:px-8 py-20 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in booking or collaboration? Let's create something amazing together!
          </p>
          <a
            href="mailto:contact@sarahmelody.com"
            className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-6 h-6" />
            <span>Contact Me</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 lg:px-8 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Sarah Melody. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}