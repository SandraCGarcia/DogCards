import React from 'react'
import "./../../../src/styles.css";
 import Mediacard from '../Mediacard';
import Title from '../Title';

import { 
  PageContainer,
}
 from './styles';
 import { 
  CARDS
}
 from '../../Database/Database';


class MediaList extends React.Component {
  
  render () {
    console.log(CARDS);

    return (
      <React.Fragment>
        <PageContainer>
        <Title/>
        <div>
          {CARDS.map(item => 
            <Mediacard 
              name={item.name}
              bday={item.bday}
              bmonth={item.bmonth} 
              byear={item.byear}
              text={item.text}
              photo={item.photo}
              likes={item.likes}
              heart='full'         
            />
          )}
          </div>
        </PageContainer>
      </React.Fragment>
    );
  }

}

export default MediaList;
