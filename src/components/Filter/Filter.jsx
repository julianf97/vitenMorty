import { Accordion, AccordionItem } from "@nextui-org/react";
import FilterFunctions from "./filterFunctions";
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
import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import Humanoide from "./species/Humanoide";

export default function Filter() {
  const { filterStatusAlive, 
    filterStatusDead, 
    filterStatusUnknown,
    filterSpeciesHuman,
    filterSpeciesAlien,
    filterSpeciesPoopybutthole,
    filterSpeciesMythological,
    filterSpeciesRobot,
    filterSpeciesAnimal,
    filterSpeciesDisease,
    filterSpeciesCronenberg,
    filterSpeciesHumanoid,
    filterSpeciesUnknown,
    filterGenderFemale,
    filterGenderMale,
    filterGenderGenderless,
    filterGenderUnknown
  } = FilterFunctions();

  const { clearFilters } = useContext(FilterContext)


  return (
    <div className='contenedorFilter'>
      <div className='internoFilter'>
        <div className='tituloFilter'>
          <h5>Filter</h5>
          <span onClick={clearFilters} >Clear Filters</span>
        </div>
        <div className="contenedorAcordeon">
          <Accordion variant="bordered" className="acordeon">
            <AccordionItem className="acordeonItem" key="1" aria-label="Accordion 1" title={<span style={{ color: 'white' }}>Status</span>}>
              <StatusAlive onClick={filterStatusAlive}/>
              <StatusDead onClick={filterStatusDead}/>
              <StatusUnknown onClick={filterStatusUnknown}/>
            </AccordionItem>
            <AccordionItem className="acordeonItem" key="2" aria-label="Accordion 2" title={<span style={{ color: 'white' }}>Species</span>}>
              <Human onClick={filterSpeciesHuman}/>
              <Alien onClick={filterSpeciesAlien}/>
              <Poopybutthole onClick={filterSpeciesPoopybutthole}/>
              <Mythological onClick={filterSpeciesMythological}/>
              <Animal onClick={filterSpeciesAnimal}/>
              <Disease onClick={filterSpeciesDisease}/>
              <Robot onClick={filterSpeciesRobot}/>
              <Cronenberg onClick={filterSpeciesCronenberg}/>
              <Humanoide onClick={filterSpeciesHumanoid}/>
              <Unknown onClick={filterSpeciesUnknown}/>
            </AccordionItem>
            <AccordionItem  key="3" aria-label="Accordion 3" title={<span style={{ color: 'white' }}>Gender</span>}>
              <Female onClick={filterGenderFemale}/>
              <Male onClick={filterGenderMale}/>
              <Genderless onClick={filterGenderGenderless}/>
              <UnknownGender onClick={filterGenderUnknown}/>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
