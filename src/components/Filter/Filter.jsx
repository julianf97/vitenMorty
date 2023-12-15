import { Accordion, AccordionItem } from "@nextui-org/react";
import StatusAlive from "./status/StatusAlive";
import StatusDead from "./status/StatusDead";
import StatusUnknown from "./status/StatusUnknown";
import Human from "./species/Human";
import Alien from "./species/Alien";
import Poopybutthole from "./species/Poopybutthole";
import Mythological from "./species/Mythological";
import Animal from "./species/Animal";
import Disease from "./species/Disease";
import Robot from "./species/Robot";
import Cronenberg from "./species/Cronenberg";
import Unknown from "./species/Unknown";
import Female from "./gender/Female";
import Male from "./gender/Male";
import Genderless from "./gender/Genderless";
import UnknownGender from "./gender/Unknown";
import { useState } from "react";
import { useRickAndMortyCharacters } from "../../hooks/useRickAndMortyCharacters";

export default function Filter() {
  const [isStatusAliveFilterActive, setIsStatusAliveFilterActive] = useState(false);
  const { characters } = useRickAndMortyCharacters(isStatusAliveFilterActive);

  const filterStatusAlive = () => {
    setIsStatusAliveFilterActive(!isStatusAliveFilterActive);
  };

  return (
    <div className='contenedorFilter'>
      <div className='internoFilter'>
        <div className='tituloFilter'>
          <h5>Filter</h5>
          <span>Clear Filters</span>
        </div>
        <div className="contenedorAcordeon">
          <Accordion variant="bordered" className="acordeon">
            <AccordionItem className="acordeonItem" key="1" aria-label="Accordion 1" title={<span style={{ color: 'white' }}>Status</span>}>
              <StatusAlive onClick={filterStatusAlive}/>
              <StatusDead/>
              <StatusUnknown/>
            </AccordionItem>
            <AccordionItem className="acordeonItem" key="2" aria-label="Accordion 2" title={<span style={{ color: 'white' }}>Species</span>}>
              <Human/>
              <Alien/>
              <Poopybutthole/>
              <Mythological/>
              <Animal/>
              <Disease/>
              <Robot/>
              <Cronenberg/>
              <Unknown/>
            </AccordionItem>
            <AccordionItem  key="3" aria-label="Accordion 3" title={<span style={{ color: 'white' }}>Gender</span>}>
              <Female/>
              <Male/>
              <Genderless/>
              <UnknownGender/>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
