import React from 'react'
import '../skill.css'

const Skill = () => {
  const categories = [
    {
      title: 'Frontend',
      items: [
        { name: 'React.js', img: 'react5.png', percentage: 85 },
        { name: 'Next.js', img: 'next12.png', percentage: 75 },
        { name: 'CSS', img: 'css2.png', percentage: 70 },
        { name: 'JavaScript', img: 'js3.png', percentage: 82 },
        { name: 'Tailwind', img: 'tali.png', percentage: 91 }
      ]
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', img: 'node6.png', percentage: 90 },
        { name: 'Express.js', img: 'exp4.png', percentage: 88 },
        { name: 'Firebase', img: 'firebase.png', percentage: 72 },
        { name: 'MongoDB', img: 'mg.png', percentage: 85 },
        { name: 'PostgreSQL', img: 'postgres9.png', percentage: 76 }
      ]
    },
    {
      title: 'Tools',
      items: [
        { name: 'Git/Github', img: 'git7.png', percentage: 91 },
        { name: 'Gitbash', img: 'gitbash.png', percentage: 65 },
        { name: 'Render', img: 'render.png', percentage: 90 },
        { name: 'Vercel', img: 'vercel.png', percentage: 78 },
        { name: 'Netlify', img: 'netlify.png', percentage: 92 },
      ]
    },
    {
      title: 'Machine Learning',
      items: [ 
        { name: 'Numpy', img: 'numpy.png', percentage: 78 },
        { name: 'Pandas', img: 'pandas.png', percentage: 75 },
        { name: 'Matplotlib', img: 'mat.png', percentage: 72 },
        { name: 'OpenCV', img: 'cv.png', percentage: 70 },
        { name: 'Scikit-learn', img: 'scikit.png', percentage: 73 },
      ]
    },
    
  ]

  return (
    <div id='mainskill' style={{ background: 'linear-gradient(to bottom,#161B22 )', color: 'white' }}>
      <section id="skill" className="skills-section">
        <div className="skills-header">
          <h1 className="skills-title">Tech Stack</h1>
        </div>

        <div className="skills-container">
          {categories.map((cat, idx) => (
            <div key={cat.title} className="tech-category">
              <div className="category-header">
                <div className="category-indicator"></div>
                <h3 className="category-name">{cat.title}</h3>
              </div>
              <div className="tech-items">
                {cat.items.map(item => (
                  <div className="tech-item" key={item.name}>
                    <div className="tech-icon-wrapper">
                      <img src={item.img} alt={item.name} className="tech-icon" />
                    </div>
                    <div className="tech-info">
                      <div className="tech-name-row">
                        <span className="tech-name">{item.name}</span>
                        <span className="tech-percentage">{item.percentage}%</span>
                      </div>
                      <div className="tech-progress-bar">
                        <div className="tech-progress-fill" style={{ width: `${item.percentage}%` }}>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skill
