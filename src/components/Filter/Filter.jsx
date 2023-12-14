import "../Characters/_characters.scss";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Filter() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
              {defaultContent}
            </AccordionItem>
            <AccordionItem className="acordeonItem" key="2" aria-label="Accordion 2" title={<span style={{ color: 'white' }}>Species</span>}>
              {defaultContent}
            </AccordionItem>
            <AccordionItem  key="3" aria-label="Accordion 3" title={<span style={{ color: 'white' }}>Gender</span>}>
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}