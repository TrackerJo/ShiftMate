import "./info_tile.css";

export type InfoTileProps = {
    title: string;
    description: string;
};

function InfoTile({
    title,
    description,

}: InfoTileProps) {
    return (
        <div className="info-tile">

            <h2 className="">{title}</h2>
            <p className="">{description}</p>
        </div>
    );
}

export default InfoTile;