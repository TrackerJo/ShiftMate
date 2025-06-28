

import "./section.css";
import InfoTile from "./info_tile";
import type { InfoTileProps } from "./info_tile";

type SectionProps = {
  title: string;
  tiles: InfoTileProps[];
  id: string;
};

function Section({ title, tiles, id }: SectionProps) {
  return (
    <>
      <div className='section' id={id}>

        <div className='section-div'>
          <h2 className="title">{title}</h2>
          <div className="section-tiles">
            {tiles.map((tile, index) => (
              <InfoTile key={index} title={tile.title} description={tile.description} />
            ))}
          </div>

        </div>


      </div>

    </>
  )
}

export default Section