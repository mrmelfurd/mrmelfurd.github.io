"use client";
import Head from "next/head";
import { useState } from "react";
const groupPhoto = {
  src: "/vineyard/group-photo.jpeg",
  title: "Harvest Group Photo",
  description: "We managed to get a group photo at the end of harvest, but unfortunately we lost about half of the group due to prior commitments before we could snap the picture! Still, it was a great day with everyone who could stay.",
  alt: "Harvest group photo with some missing friends",
};
const galleryImages = [
  {
    src: "/vineyard/first-bottle-of-wine.jpeg",
    title: "Our First Bottle of Wine",
    description: "This marks a huge milestone—bottling our very first wine from grapes we grew and harvested ourselves.",
    alt: "First bottle of wine",
  },
  {
    src: "/vineyard/grape-harvest-tractor.jpeg",
    title: "Harvest in Action",
    description: "Here I am driving the tractor during our grape harvest. It’s hands-on work, but incredibly fulfilling.",
    alt: "Harvest in action on tractor",
  },
  {
    src: "/vineyard/harvested-grapes.jpeg",
    title: "Freshly Harvested Grapes",
    description: "A look at the grapes we picked, ready to be transformed into wine.",
    alt: "Freshly harvested grapes",
  },
  {
    src: "/vineyard/vineyard-aerial-view.jpeg",
    title: "Bird’s Eye View of the Vineyard",
    description: "An aerial shot of the vineyard, showing the land where this dream is taking shape.",
    alt: "Bird’s eye view of the vineyard",
  },
  {
    src: "/vineyard/dad-me-beer.jpeg",
    title: "First IPA Brewed Together",
    description: "This was our first IPA that we made and enjoyed together—it was delicious! This last year, I added a chocolate IPA, which some of my fellow Detroit Slalom coworkers also got to try.",
    alt: "First IPA brewed together",
  },
  {
    src: "/vineyard/learning.jpeg",
    title: "Learning During Our First Big Harvest",
    description: "Since this was our first big harvest, we realized we needed to trim before putting on bird netting because there were a lot of vines! Every year brings new lessons.",
    alt: "Learning about trimming before netting",
  },
  {
    src: "/vineyard/coworkers-from-ford.jpeg",
    title: "Coworkers from Ford",
    description: "Some great friends and coworkers from Ford came and joined in on the fun during harvest.",
    alt: "Coworkers from Ford helping with harvest",
  },
  {
    src: "/vineyard/harvest-group.jpeg",
    title: "More People Harvesting",
    description: "This photo shows even more friends and family helping out in the vineyard during harvest—everyone pitching in to bring in the grapes.",
    alt: "People harvesting grapes in the vineyard",
  },
  {
    src: "/vineyard/vines-line.jpeg",
    title: "Vines Down the Line",
    description: "A view down the line of vines, showing the rows and the scale of the vineyard.",
    alt: "Rows of vines in the vineyard",
  },
  {
    src: "/vineyard/destemmer.jpeg",
    title: "The Destemmer",
    description: "This top part is the destemmer. Grapes are poured in and the machine separates the stems from the berries, making sure only the fruit continues on for winemaking.",
    alt: "Grape destemmer machine",
  },
  {
    src: "/vineyard/destem-crush.jpeg",
    title: "Crushing After Destemming",
    description: "After the grapes are destemmed, they are gently crushed to release their juice and begin the fermentation process.",
    alt: "Crushing destemmed grapes",
  },
  {
    src: "/vineyard/open-fermentation.jpeg",
    title: "Open Fermentation for Red Wine",
    description: "The process where red wine is created in open fermentation. During this stage, crushed grapes (must) are left in open-top containers, allowing natural yeasts and oxygen to interact with the juice. The skins, seeds, and sometimes stems remain in contact with the juice, extracting color, tannins, and flavor. The cap (grape skins) is regularly punched down to keep it moist and promote even fermentation. Open fermentation is traditional for red wines and helps develop complex aromas and structure.",
    alt: "Open fermentation of red wine",
  },
];
export default function Home() {
  const [modalImg, setModalImg] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <>
      <Head>
        <title>Mel's Webpage</title>
      </Head>
      <main className="flex flex-col items-center min-h-screen bg-zinc-50 dark:bg-black px-4 py-12">
      <div className="flex flex-col items-center bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-8 max-w-2xl w-full mb-10">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 text-center">
          Hello! Welcome to Mel's Webpage
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 text-center mb-4">
          Discover more about my <a href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">professional career and background</a>.
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 text-center mb-4 text-lg">
          I’m a software engineer and Solution Architect who is passionate about building impactful solutions and always striving to learn more.
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 text-center mb-2 text-lg">
          Outside of tech, I’m excited to share my biggest side hobby: starting up a vineyard and winery. We’re currently in the middle of the government application process for the TTB, and learning more and more every day. It’s a journey full of learning, hard work, and rewarding moments.
        </p>
      </div>

      <div className="container mx-auto">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center">
          {galleryImages.map((img, idx) => (
            <div className="col d-flex align-items-stretch" key={idx}>
              <div className="card h-100 shadow-sm" style={{ minWidth: 0 }}>
                <img
                  src={img.src}
                  className="card-img-top cursor-pointer"
                  alt={img.alt}
                  style={img.title === "Harvest in Action"
                    ? { width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '350px' }
                    : { objectFit: 'cover', height: '180px' }
                  }
                  onClick={() => openModal(img)}
                  title="Click to view full size"
                />
                <div className="card-body p-2">
                  <h6 className="card-title mb-1" style={{ fontSize: '1rem' }}>{img.title}</h6>
                  <p className="card-text mb-0" style={{ fontSize: '0.95rem' }}>{img.description}</p>
                </div>
              </div>
            </div>
          ))}
              {/* Modal for full-size image */}
              {modalOpen && modalImg && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                  onClick={closeModal}
                  style={{ cursor: 'pointer' }}
                >
                  <div
                    className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-4 relative max-w-3xl w-full flex flex-col items-center"
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-2 right-2 text-2xl text-zinc-700 dark:text-zinc-200 hover:text-red-500"
                      onClick={closeModal}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <img
                      src={modalImg.src}
                      alt={modalImg.alt}
                      style={{ maxWidth: '90vw', maxHeight: '70vh', objectFit: 'contain', borderRadius: '0.5rem' }}
                    />
                    <h6 className="mt-3 font-bold text-lg text-center">{modalImg.title}</h6>
                    <p className="text-center mb-0">{modalImg.description}</p>
                  </div>
                </div>
              )}
        </div>
      </div>

      {/* Centered group photo at the end */}
      <section className="w-full flex justify-center my-10">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-4 flex flex-col items-center mx-auto" style={{ maxWidth: 520, width: '100%' }}>
          <img src={groupPhoto.src} alt={groupPhoto.alt} style={{ objectFit: 'cover', width: '100%', maxWidth: 480, height: 'auto', borderRadius: '1rem', marginBottom: '1rem', display: 'block' }} />
          <h6 className="text-center font-bold mb-1" style={{ fontSize: '1.1rem' }}>{groupPhoto.title}</h6>
          <p className="text-center mb-0" style={{ fontSize: '1rem' }}>{groupPhoto.description}</p>
        </div>
      </section>

      <div className="container mx-auto my-5">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 text-center">My Vineyard Vlog</h2>
          <p className="text-zinc-700 dark:text-zinc-300 text-center mb-3">
            I created a vlog to document my first full year in the vineyard, since people were curious about what I was up to. If I have time this year, I’ll try to vlog again!
          </p>
          <div className="d-flex justify-content-center mb-3">
            <a href="https://www.youtube.com/playlist?list=PLYvk0OzRKmlmZ-cxDosqM8IJaJz4vuzDM" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Watch the Full Playlist
            </a>
          </div>
          <div className="ratio ratio-16x9" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/Ffqt4MUqNYE?list=PLYvk0OzRKmlmZ-cxDosqM8IJaJz4vuzDM"
              title="Vineyard Vlog - Second Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
