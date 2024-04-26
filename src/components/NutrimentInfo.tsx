type Props = {
  typeName: string;
  unit: string;
  value: number;
  backgroundColor: `#${string}`;
  children?: JSX.Element;
};

function NutrimentInfo({ typeName, unit, value, backgroundColor, children }: Props) {
  return (
    <div className="nutriment">
      <div
        className="nutriment__icon"
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        {children}
      </div>
      <div className="nutriment__infos">
        <p className="nutriment-value">{value}{unit}</p>
        <p className="nutriment-name">{typeName}</p>
      </div>
    </div>
  );
}

export default NutrimentInfo;
