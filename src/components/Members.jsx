import React from 'react'

const Members = () => {
    const data = {
        nasir: {
            img:'https://media.licdn.com/dms/image/v2/D5603AQHQhkcrXUM_7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727407498516?e=1733356800&v=beta&t=lRKuGDM7OIBRJ_glVPd3weARgZDtu4U3P8jfcS2t024',
            name: 'Nasir Ali',
            about: 'Hey, I am Nasir Ali from B.Tech 4th year.',
            githubProfile: 'https://github.com/Nasir-buddy',
            linkedinProfile: 'https://www.linkedin.com/in/syednasirali17/',
            courseYear: 'B.Tech 4th Year',
            portfolio: 'https://portfolio-v1-1-iota.vercel.app/',

        }, 
        Anurag:{
            img: 'https://media.licdn.com/dms/image/v2/D4D03AQGgtgJwBEJs0A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688061709044?e=1733356800&v=beta&t=o6dy7jKffyw8LbaJzMgruNxH0dkeQ-YsLRBMKw9dnPA',
            name: 'Anurag chauhan',
            about: 'Hey, I am Nasir Ali from B.Tech 4th year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        Satyam_Shrivastav:{
            img: '/member_pics/satyam.jpg',
            name: 'Satyam Shrivastav',
            about: 'Hi i am  Software developer',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        Aman_Jha:{
            img: '/member_pics/aman.jpg',
            name: 'Aman Jha',
            about: 'Hey, I am Aman Jha from B.Tech 4th year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        Anurag_Verma:{
            img: '',
            name: 'Anurag Verma',
            about: 'Hey, I am Anurag Verma from B.Tech 4th year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        Ankur_Jaiswal:{
            img: '/member_pics/ankur.jpg',
            name: 'Ankur Jaiswal',
            about: 'Experienced Full Stack Developer with a strong command of modern web technologies like React, Node.js, and Next.js. Skilled in building scalable, high-performance applications, I specialize in frontend and backend integration, delivering end-to-end solutions across diverse industries.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 3rd Year',
            portfolio: '',
        },
        Ananya_Gupta:{
            img: '/member_pics/ananya.jpg',
            name: 'Ananya Gupta',
            about: 'Hey, I am Ananya Gupta from B.Tech 3rd year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 3rd Year',
            portfolio: '',
        },
        Tanya_Gupta:{
            img: '/member_pics/tanya.jpg',
            name: 'Tanya Gupta',
            about: 'Hey, I am Tanya Gupta from B.Tech 3rd year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 3rd Year',
            portfolio: '',
        },
        Sachin:{
            img: 'https://media.licdn.com/dms/image/v2/D5603AQGMhVwTuJraiQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668236353674?e=1733356800&v=beta&t=b1UBaNIR7t7PHe0j1W9wJkMXVi4RH8zzymuYXda25N0',
            name: 'Sachin Agarwal',
            about: 'Hey, I am Sachin from B.Tech 3rd year.',
            githubProfile: 'https://github.com/Sachin-Agarwal1',
            linkedinProfile: 'https://www.linkedin.com/in/sachin-agarwal-7b5387240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            courseYear: 'B.Tech 3rd Year',
            portfolio: '',
        },
        Ankit:{
            img: '',
            name: 'Ankit',
            about: 'Hey, I am Ankit from B.Tech 3rd year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        Samiksha:{
            img: '/member_pics/samiksha.jpeg',
            name: 'Samiksha Sharma',
            about: 'Hey, I am Samiksha Sharma from B.Tech 2nd year.',
            githubProfile: 'https://github.com/SamikshaaSharma',
            linkedinProfile: 'https://www.linkedin.com/in/samiksha-sharma-4725b5248/',
            courseYear: 'B.Tech 3rd Year',
            portfolio: '',
        },
        demo1:{
            img: '',
            name: 'demo',
            about: 'Hey, I am <> from B.Tech <> year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        demo2:{
            img: '',
            name: 'demo',
            about: 'Hey, I am <> from B.Tech <> year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        demo3:{
            img: '',
            name: 'demo',
            about: 'Hey, I am <> from B.Tech <> year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        demo4:{
            img: '',
            name: 'demo',
            about: 'Hey, I am <> from B.Tech <> year.',
            githubProfile: '',
            linkedinProfile: '',
            courseYear: 'B.Tech 4th Year',
            portfolio: '',
        },
        
    }
            
    
  return (
    <div className='p-10 overflow-auto bg-[url(/pic.png)] sm:bg-[url(/backgroundImg.png)] bg-cover bg-center h-screen w-screen bg-fixed'>
    <h1 className='text-center text-3xl font-semibold italic text-[#2D2822] mb-10'>Members</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center'>
    {Object.values(data).map((item, index) => (
                    <div key={index} className='bg-[#C9C4BC] w-[100%] p-4 rounded-md shadow-[0_20px_50px_rgba(105,_89,_75,_0.8)] hover:scale-105 duration-300'>
                        <img className='w-[50px] h-[50px] rounded-full mb-2' src={item.img} alt="" />
                        <h1 className='font-semibold text-2xl mb-2'>{item.name}</h1>
                        <p className='mb-2'>{item.about}</p>
                        <p><i class="ri-user-line"></i> Portfolio: <a href={item.portfolio}>Checkout</a> </p>
                        <p><i className="ri-github-fill"></i> GitHub Profile: <a href={item.githubProfile}>Checkout</a></p>
                        <p><i className="ri-linkedin-box-fill"></i> LinkedIn Profile: <a href={item.linkedinProfile}>Checkout</a></p>
                        <p><i className="ri-git-repository-fill"></i> {item.courseYear}</p>
                    </div>
                ))}
    </div>
</div>

  )
}

export default Members