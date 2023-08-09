import { FxsStreetIcon, BarIcon } from '/src/Components/icons';
import './Menu.scss';

export default function HeaderView() {

  const barIcon = (numberDivs) => {
    const divCount = numberDivs;
    const divs = [];
  
    for (let i = 0; i < divCount; i++) {
      divs.push(
        <BarIcon color='#fff' width={111} height={10} viewBox='0 0 111 10'/>
      );
    }
    return <div className='bar-icon'>{divs}</div>;
  };

  return (
      <section id="sidebar">
        <div className="sidebar-container">
          <FxsStreetIcon className='icon-fxs'/>
          {barIcon(5)}
          {/* {barHorizontal(5,'255px','41px','#fff')} */}
        </div>
      </section>
  );
}
