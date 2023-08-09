import { BarIcon } from '/src/Components/icons';
import './Header.scss';

export default function Header() {
  const circle = ['second','third','fourth'];
  return (
      <section id="main-header">
        <div className="header-container">
          <div className='container-sections'>
            <div className='container-first-section'>
              <div className='first-circle'/>
              <BarIcon width={136} height={10} viewBox='0 0 136 10' color='#304C70'/>
            </div>
            <div className='container-second-section'>
              <BarIcon width={136} height={10} viewBox='0 0 136 10' color='#E4871B'/>
              {
                circle.map((c, index) => {
                  return (
                    <div className={`container-circle`} key={index}>
                      <div className='line'/>
                      <div className={`${c}-circle`}/> 
                    </div>
                  )
                })
              }
              <BarIcon width={91} height={10} viewBox='0 0 91 10' color='#8C8D91'/>
            </div>
          </div>
        </div>
      </section>
  );
}
