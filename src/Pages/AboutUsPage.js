import React, { useState } from 'react';
import Footer from '../Footer';
// import '../Banner';
import '../styles/aboutUs.css';
    

const AboutUs = () => {

    const [isFullTextVisible, setIsFullTextVisible] = useState(false);

    const toggleTextVisibility = () => {
        setIsFullTextVisible(!isFullTextVisible);
    };

    const data = [
        {
            image: `${process.env.PUBLIC_URL}./ourJourney.png`,
            secondOverlayImage: `${process.env.PUBLIC_URL}./ourjourney2.png`, // Add second image for overlap
            heading: "2022",
            subheading: "Subheading 1",
            content: "This is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detail."
        },
        {
            image: `${process.env.PUBLIC_URL}./ourJourney.png`,
            secondOverlayImage: `${process.env.PUBLIC_URL}./ourjourney2.png`, // Add second image for overlap
            heading: "2023",
            subheading: "Subheading 2",
            content: "This is the normal text content for the second block. Add your content here to describe the block in detail.This is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detail"
        },
        {
            image: `${process.env.PUBLIC_URL}./ourJourney.png`,
            secondOverlayImage: `${process.env.PUBLIC_URL}./ourjourney2.png`, // Add second image for overlap
            heading: "2024",
            subheading: "Subheading 3",
            content: "This is the normal text content for the third block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detailThis is the normal text content for the first block. Add your content here to describe the block in detail."
        }
    ];

    return (
        <div className="about-us">
            <div className="about-us-banner">
                <img
                    src={`${process.env.PUBLIC_URL}./aboutusBanner1.png`} 
                    alt="About Us Banner"
                    className="banner-image"
                />
                
                <div className="banner-overlay1">
                    <img
                        src={`${process.env.PUBLIC_URL}./aboutusBanner2.png`} 
                        alt="Center Image1"
                        className="center-image1"
                    />
                </div>

                <div className="banner-overlay2">
                    <img
                        src={`${process.env.PUBLIC_URL}./aboutusBanner3.png`} 
                        alt="Center Image2"
                        className="center-image2"
                    />
                </div>
                
            </div>
            <div className="banner-text">
                About Us
            </div>
            
            <div className="synopsis">
                <p>
                Some mysterious kidnaps are happening in a town but where ever the kidnap happen the kindaper leaves a code language hint. Due to unusual dreams Vijay (Hero) gets panicked and suffers psychologically. Even Vijay friends gets disturbed by seeing vijay's condition. By seeing his son's condition Vijay's father Prasada Rao tries to take his son to a psychiatrist but Vijay vasi escapes by saying some reasons. One day Vijay father takes his son to hospital by saying his son that he has a health problem. Hero falls in love with doctor Manvitha.
                <br />
                <br />
                Some mysterious kidnaps are happening in a town but wherever the kidnap happen the kidnapper leaves a code language hint. Due to unusual dreams, Vijay (Hero) gets panicked and suffers psychologically. Even Vijay's friends get disturbed by seeing Vijay's condition. By seeing his son's condition, Vijay's father Prasada Rao tries to take his son to a psychiatrist but Vijay escapes by giving excuses. One day Vijay's father takes his son to the hospital by saying he has a health problem.
                Manvitha is daughter of Circle Inspector. Cl likes his daughter very much. Due to continues kidnap cases Cl feels the pressure. As part of investigation CI visits a college.
                </p>
            </div>

            <div className="personStory-block">
            <div className="personStory-wrapper">
                <img
                    src={`${process.env.PUBLIC_URL}./ProfileImg.png`} 
                    alt="Person Story"
                    className="story-image"
                />
                <div className="personStory-content">
                    <div className="personStory-text-container">
                    <div className={`personStory-text ${isFullTextVisible ? 'expanded' : ''}`}>
                        Some mysterious kidnaps are happening in a town but wherever the kidnap 
                        happen the kidnapper leaves a code language hint. Due to unusual dreams, 
                        Vijay (Hero) gets panicked and suffers psychologically. Even Vijay's friends 
                        get disturbed by seeing Vijay's condition. By seeing his son's condition, 
                        Vijay's father Prasada Rao tries to take his son to a psychiatrist but Vijay 
                        escapes by giving excuses. One day Vijay's father takes his son to the 
                        hospital by saying he has a health problem.
                        <br />
                        <br />
                        Manvitha is the daughter of Circle Inspector. CI likes his daughter very much. 
                        Due to continuous kidnap cases, CI feels the pressure. As part of the investigation, 
                        CI
                    </div>

                    <div
                    className={`additional-text ${isFullTextVisible ? 'expanded' : ''}`}
                    >
                        <p>
                            More content goes here.
                        </p>
                    </div>
                    <div className="see-more-container">
                        <span className="see-more-link" onClick={toggleTextVisibility}>
                            {isFullTextVisible ? 'See Less' : 'See More'}
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        <div className="content-wrapper">
            <div className="content-block">
                {data.map((item, index) => (
                    <div className="sub-block" key={index}>
                    <div className="image-container">
                        <img src={item.image} alt={`Block ${index + 1}`} className="main-image" />
                        <img src={item.secondOverlayImage} alt={`Block ${index + 1}`} className="secondOverlayImage" />
                    </div>
                    <div className="text-content">
                        <div className="heading">{item.heading}</div>
                        <div className="subheading">{item.subheading}</div>
                        <div className="normal-text">{item.content}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
            <Footer />
        </div>
    );
};

export default AboutUs;
