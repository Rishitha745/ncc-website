import React, { useState } from "react";
import SideBar from "./SideBar";
import MobileSideBar from "./MobileSideBar";
import { aboutData } from "../../Constants";
import { MenuIcon } from "lucide-react";
import MainLayout from "../../UI/MainLayout";
import ncc from "../../assets/About/ncc.png";
import uniform from "../../assets/About/uniform.webp";
import ranks from "../../assets/About/ranks.png";
import Button from "../../UI/Button";

const About = () => {
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  const toggleMobileSideBar = () => {
    setShowMobileSideBar(!showMobileSideBar);
  };

  const [showSideBar, setShowNavBar] = useState(0);

  const toggleSideBar = () => {
    setShowNavBar(!showSideBar);
  };

  const [showCurrentIndex, setCurrentIndex] = useState(0);

  const toggleOpenIndex = (index) => {
    if (showCurrentIndex === index) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish((prev) => !prev);
  };

  return (
    <div>
      <MainLayout>
        <div className="px-6 mb-6 sm:mb-10 flex gap-12 relative">
          <div className="hidden md:block max-h-min">
            <SideBar
              showcurrentIndex={showCurrentIndex}
              toggleOpenIndex={toggleOpenIndex}
              showSideBar={showSideBar}
              toggleSideBar={toggleSideBar}
            />
          </div>
          <div className="flex-1 flex justify-center items-start">
            <div className="relative">
              <h1 className="mb-5 flex items-center justify-between text-2xl sm:text-3xl lg:text-4xl">
                {aboutData[showCurrentIndex].name}
                <MenuIcon
                  size={24}
                  className="md:hidden"
                  onClick={toggleMobileSideBar}
                />
              </h1>
              <div
                className={`absolute top-10 z-10 w-full transition-transform duration-300 md:hidden ${
                  showMobileSideBar ? "" : "hidden"
                }`}
              >
                <MobileSideBar
                  showcurrentIndex={showCurrentIndex}
                  toggleOpenIndex={toggleOpenIndex}
                  showMobileSideBar={showMobileSideBar}
                  toggleMobileSideBar={toggleMobileSideBar}
                />
              </div>
              <div className="text-slate-600 text-sm sm:text-base lg:text-lg xl:text-xl">
                {showCurrentIndex === 0 && (
                  <p>
                    The National Cadet Corps (NCC) is a youth development
                    movement. It has enormous potential for nation-building. The
                    NCC provides opportunities to the youth of the country for
                    their all-round development with a sense of Duty,
                    Commitment, Dedication, Discipline, and Moral Values so that
                    they become able leaders and useful citizens. The NCC
                    provides exposure to the cadets in a wide range of
                    activities, with a distinct emphasis on Social Services,
                    Discipline, and Adventure Training.
                  </p>
                )}
                {showCurrentIndex === 1 && (
                  <ul className="list-disc list-inside">
                    <li>
                      To develop qualities of character, courage, comradeship,
                      discipline, leadership, secular outlook, spirit of
                      adventure and sportsmanship and the ideals of selfless
                      service among the youth to make them useful citizens.
                    </li>
                    <br />
                    <li>
                      To create a human resource of organised trained and
                      motivated youth to provide leadership in all walks of life
                      including the Armed Forces and be always available for the
                      service of the nation.
                    </li>
                  </ul>
                )}
                {showCurrentIndex === 2 && (
                  <>
                    <p>
                      The motto of NCC is 'Unity and Discipline' (Ekta aur
                      Anushasan), adopted on 23 Dec 1957. DG's Four Cardinal
                      Principles of Discipline:
                    </p>
                    <br />
                    <ul className="list-disc list-inside bullet-points">
                      <li>Obey with a smile</li>
                      <li>Be Punctual</li>
                      <li>Work hard and without fuss</li>
                      <li>Make no excuses and tell no lies</li>
                    </ul>
                  </>
                )}
                {showCurrentIndex === 3 && (
                  <>
                    <p>
                      The NCC song was adopted in January 1963. The song was
                      written by Sudarshan Faakir and composed by the then
                      Director of Music, Maj. Gen. (Dr.) V. Mani. The following
                      is the English version of the NCC song.
                    </p>
                    <br />
                    <div className="audio-player">
                      <audio id="nccSongPlayer" controls>
                        <source src="/nccSong.mp3" type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                    <br />
                    <div className="text-center">
                      <p className="text-slate-900 font-AbeeZee text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl italic">
                        {isEnglish ? (
                          <>
                            "Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain
                            <br />
                            Apni Manzil Ek Hai,
                            <br />
                            Ha, Ha, Ha, Ek Hai,
                            <br />
                            Ho, Ho, Ho, Ek Hai.
                            <br />
                            Hum Sab Bharatiya Hain.
                            <br />
                            <br />
                            Kashmir Ki Dharti Rani Hai,
                            <br />
                            Sartaj Himalaya Hai,
                            <br />
                            Saadiyon Se Humne Isko Apne Khoon Se Pala Hai
                            <br />
                            Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge,
                            <br />
                            Hum Shamshir Utha Lenge.
                            <br />
                            <br />
                            Bikhre Bikhre Taare Hain Hum Lekin Jhilmil Ek Hai,
                            <br />
                            Ha, Ha, Ha, Ek Hai
                            <br />
                            Hum Sab Bharatiya Hai.
                            <br />
                            Mandir Gurudwaare Bhi Hain Yahan
                            <br />
                            Aur Masjid Bhi Hai Yahan
                            <br />
                            Girija Ka Hai Ghariyaal Kahin
                            <br />
                            Mullah Ki Kahin Hai Ajaan
                            <br />
                            <br />
                            Ek Hee Apna Ram Hain, Ek Hi Allah Taala Hai,
                            <br />
                            Ek Hee Allah Taala Hain, Raang Birange Deepak Hain
                            Hum,
                            <br />
                            Lekin Jagmag Ek Hai, Ha Ha Ha Ek Hai, Ho Ho Ho Ek
                            Hai.
                            <br />
                            Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain."
                            <br />
                          </>
                        ) : (
                          <>
                            "हम सब भारतीय हैं, हम सब भारतीय हैं
                            <br />
                            अपनी मंजिल एक है,
                            <br />
                            हा, हा, हा, एक है,
                            <br />
                            हो, हो, हो, एक है।
                            <br />
                            हम सब भारतीय हैं।
                            <br />
                            <br />
                            कश्मीर की धरती रानी है,
                            <br />
                            सरताज हिमालय है,
                            <br />
                            सादियों से हमने इसको अपने खून से पाला है
                            <br />
                            देश की रक्षा की खातिर हम शमशीर उठा लेंगे,
                            <br />
                            हम शमशीर उठा लेंगे।
                            <br />
                            <br />
                            बिखरे बिखरे तारे हैं हम लेकिन झिलमिल एक है,
                            <br />
                            हा, हा, हा, एक है
                            <br />
                            हम सब भारतीय है।
                            <br />
                            मंदिर गुरुद्वारे भी हैं यहाँ
                            <br />
                            और मस्जिद भी है यहाँ
                            <br />
                            गिरिजा का है घरियाल कहीं
                            <br />
                            मुल्ला की कहीं है अजान
                            <br />
                            <br />
                            एक ही अपना राम हैं, एक ही अल्लाह ताला है,
                            <br />
                            एक ही अल्लाह ताला हैं, रंग बिरंगे दीपक हैं हम,
                            <br />
                            लेकिन जगमग एक है, हा हा हा एक है, हो हो हो एक है।
                            <br />
                            हम सब भारतीय हैं, हम सब भारतीय हैं।"
                            <br />
                          </>
                        )}
                      </p>
                      <br />
                      <Button onClick={toggleLanguage}>
                        {isEnglish ? "Hindi" : "English"}
                      </Button>
                    </div>
                    <style jsx>{`
                      audio {
                        width: 100%;
                        max-width: 500px;
                        margin: auto;
                      }
                    `}</style>
                  </>
                )}
                {showCurrentIndex === 4 && (
                  <p>
                    WE THE CADET OF THE NATIONAL CADET CORPS, DO SOLEMNLY PLEDGE
                    THAT WE SHALL ALWAYS UPHOLD THE UNITY OF INDIA. WE RESOLVE
                    TO BE DISCIPLINED AND RESPONSIBLE CITIZEN OF OUR NATION. WE
                    SHALL UNDERTAKE POSITIVE COMMUNITY SERVICE IN THE SPIRIT OF
                    SELFLESSNESS AND CONCERN FOR OUR FELLOW BEINGS.
                  </p>
                )}
                {showCurrentIndex === 5 && (
                  <>
                    <p>
                      The NCC flag for various units of NCC was first introduced
                      in 1951. The flag contains the NCC badge in gold in the
                      middle, the letters “NCC” encircled by a wreath of
                      seventeen leaves in gold at the top left-hand corner, and
                      the whole set against a background of deep blue.
                    </p>
                    <br />
                    <div className="mt-6 flex justify-center">
                      <img
                        src={ncc}
                        alt="Description of the image"
                        className="w-96 h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </>
                )}
                {showCurrentIndex === 6 && (
                  <>
                    <ul className="list-disc list-inside bullet-points">
                      <li>
                        Army cadets wear khaki uniforms, Naval cadets wear
                        white, and Air Force cadets wear light blue and grey. SD
                        boys wear khaki full-sleeve shirts and trousers or
                        shorts for JD boys. Female cadets in each wing wear
                        appropriate shirts and trousers, with SW & JW girls also
                        wearing salwar and kamiz for non-parade activities.
                      </li>
                      <br />
                      <li>
                        A green beret is required for all, except Sikh cadets
                        who wear a turban. For PT, cadets wear brown canvas
                        shoes, and for drills, they wear black leather DMS.
                        Woolen vests are mandatory in cold areas, with different
                        colors for each wing.
                      </li>
                    </ul>
                    <br />
                    <div className="mt-6 flex justify-center">
                      <img
                        src={uniform}
                        alt="Description of the image"
                        className="w-96 h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </>
                )}
                {showCurrentIndex === 7 && (
                  <>
                    <div>
                      <p>
                        First of all students are recruited as a cadet. In due
                        course, they are promoted gradually. There are certain
                        terms and conditions for such promotions:
                      </p>
                      <br />
                      <strong>Lance Corporals</strong>
                      <ol className="list-disc list-inside bullet-points">
                        <li>
                          They must have got minimum training of three months in
                          NCC.
                        </li>
                        <li>
                          They must have been present at least 75% times in the
                          parade.
                        </li>
                        <li>
                          They must have passed the test of drill and map
                          reading.
                        </li>
                      </ol>
                      <br />
                      <strong>Corporal</strong>
                      <ol className="list-disc list-inside bullet-points">
                        <li>
                          He must have been on the post of Lance Corporal for
                          six months.
                        </li>
                        <li>
                          He must have passed the test of Weapon Training (WT).
                        </li>
                      </ol>
                      <br />
                      <strong>Sergeant</strong>
                      <ol className="list-disc list-inside bullet-points">
                        <li>
                          He must have been on the post of corporal for six
                          months.
                        </li>
                        <li>He must be the cadet of Second Year in NCC.</li>
                      </ol>
                      <br />
                      <strong>Company Quarter Master Sergeant</strong>
                      <ol className="list-disc list-inside bullet-points">
                        <li>
                          They must have been present at least 75% times in the
                          parade.
                        </li>
                        <li>
                          They must have passed the test of drill and map
                          reading.
                        </li>
                      </ol>
                      <br />
                      <strong> Junior Under Officer (JUO)</strong>
                      <ol className="list-disc list-inside bullet-points">
                        <li>
                          He must have been on the post of sergeant for six
                          months and passed the 'B' certificate.
                        </li>
                      </ol>
                      <br />
                      <strong>Senior Under Officer (SUO)</strong>
                      <ol className="list-disc list-inside bullet-points">
                        <li>
                          He must have been on the post of under officer at
                          least for six months.
                        </li>
                      </ol>
                    </div>
                    <br />
                    <div className="mt-6 flex justify-center">
                      <img
                        src={ranks}
                        alt="Description of the image"
                        className="w-90 h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </>
                )}
                {showCurrentIndex === 8 && (
                  <div className="text-slate-600 font-AbeeZee text-sm sm:text-base lg:text-lg xl:text-xl">
                    <strong>1948's:</strong>
                    <ul className="list-disc list-inside bullet-points">
                      <li>
                        National Cadet Corps (NCC) was officially established
                        under the National Cadet Corps Act, aimed at providing
                        military training to students.
                      </li>
                    </ul>
                    <br />
                    <strong>1950's:</strong>
                    <ul className="list-disc list-inside bullet-points">
                      <li>
                        The first NCC camp was held, initially meant for male
                        students in schools and colleges.
                      </li>
                    </ul>
                    <br />
                    <strong>1960's:</strong>
                    <ul className="list-disc list-inside bullet-points">
                      <li>
                        The program expanded to include female cadets, marking a
                        step towards gender inclusivity.
                      </li>
                    </ul>
                    <br />
                    <strong>1970's:</strong>
                    <ul className="list-disc list-inside bullet-points">
                      <li>
                        Integration of NCC with various educational institutions
                        across the country.
                      </li>
                    </ul>
                    <br />
                    <strong>1980's:</strong>
                    <ul className="list-disc list-inside bullet-points">
                      <li>
                        A uniform syllabus was introduced, standardizing the
                        training curriculum.
                      </li>
                    </ul>
                    <br />
                    <strong>Present Day:</strong>
                    <ul className="list-disc list-inside bullet-points">
                      <li>
                        NCC has become one of the world’s largest youth
                        organizations, with active participation in leadership,
                        community services, and disaster management.
                      </li>
                    </ul>
                    <br />
                    <strong>Role in Defense:</strong>
                    <ul className="list-disc list-inside bullet-points">
                      <li>
                        It continues to support the Indian Armed Forces and
                        contribute to national defense and unity.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default About;
