import { Fragment } from "react";
import { Spinner } from "../../components/helpers/Spinner";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
import { SearchEngineTypes } from "../../interfaces/SearchEngineTypes";

type PropsTypes = {
  prompt?: string;
  data: SearchEngineTypes[] | undefined;
};

const Lexica = ({ data }: PropsTypes) => {
  return (
    <>
    <style jsx={String(true)}>
        {`
          .rootContainer {
            max-width: 1380px;
            margin: 0 auto;
            padding: 2rem;
            text-align: center;
          }
        `}
      </style>
      <div className="columns-5 gap-2 rootContainer">
        {data?.map((search: any) => (
          <Fragment key={search.id}>
            <div className="mb-2">
              <img src={search.src} alt={search.prompt} />
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
};

export default Lexica;
