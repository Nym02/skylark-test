import React from 'react';
import Button from '../Button';
import team from "./../../assets/img/team.png"

const Team = () => {
  return (
    <div className='skylark-team-item'>
        <div className="skylark-team-item-left">
           <div className="skylark-team-item-left-wrapper">
           <h2 className="skylark-team-item-left-header">
            Neque tortor porttitor ornare ultrices. <br /> Risus eget vel maecenas
            </h2>
            <div className="skylark-team-item-left-divider"></div>
            <p className="skylark-team-item-left-desc">
            Lorem ipsum dolor sit amet consectetur. Sollicitudin ac egestas rutrum eget urna. Risus eget congue duis diam. Etiam nisl quisque ut sed ac. Neque tortor porttitor ornare ultrices. Risus eget vel maecenas aliquam. Amet euismod purus turpis velit. Eget sem integer urna odio.
            </p>
            <div className="skylark-team-item-left-buttons">
                <Button text="Join the team" className={"btn-primary"} />
                <Button text="meet the team" className={"btn-primary"} />
            </div>
           </div>
        </div>
        <div className="skylark-team-item-right">
            <img src={team} alt="" />
        </div>
    </div>
  )
}

export default Team