import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

const Legal = () => {
  return (
    <Layout
      title={`Mentions légales`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="container py-16 flex flex-col gap-8">
        <Heading as="h1" className="text-4xl font-bold uppercase">
          Mentions légales
        </Heading>

        <section className="flex flex-col gap-2">
          <Heading as="h2" className="text-2xl font-bold mb-2">
            Éditeur du service
          </Heading>

          <div>
            <p>
              <span className="font-bold">Nom de l'éditeur</span> :{" "}
              <strong className="font-normal">Gauthier Daniels EI</strong>
            </p>

            <p>
              <span className="font-bold">Forme juridique</span> :{" "}
              <strong className="font-normal">Entrepreneur individuel</strong>
            </p>
          </div>

          <div>
            <p>
              <span className="font-bold">Adresse physique</span> :{" "}
              <strong className="font-normal">
                689 Chemin Latéral, 45240 La Ferté Saint-Aubin
              </strong>
            </p>

            <p>
              <span className="font-bold">Adresse email</span> :{" "}
              <strong className="font-normal">
                gauthier@gauthierdaniels.fr
              </strong>
            </p>
          </div>

          <div>
            <p>
              <span className="font-bold">SIREN</span> :{" "}
              <strong className="font-normal">851745141</strong>
            </p>

            <p>
              <span className="font-bold">SIRET</span> :{" "}
              <strong className="font-normal">85174514100057</strong>
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <Heading as="h2" className="text-2xl font-bold mb-2">
            Directeur de la publication
          </Heading>

          <div>
            <p>
              <span className="font-bold">
                Nom du directeur de la publication
              </span>{" "}
              : <strong className="font-normal">Gauthier Daniels</strong>
            </p>

            <p>
              <span className="font-bold">Adresse email</span> :{" "}
              <strong className="font-normal">
                gauthier@gauthierdaniels.fr
              </strong>
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <Heading as="h2" className="text-2xl font-bold mb-2">
            Hébergement
          </Heading>

          <div>
            <p>
              <span className="font-bold">Nom de l'hébergeur</span> :{" "}
              <strong className="font-normal">Infomaniak Network SA</strong>
            </p>

            <p>
              <span className="font-bold">Adresse web de l'hébergeur</span> :{" "}
              <strong className="font-normal">www.infomaniak.com</strong>
            </p>

            <p>
              <span className="font-bold">Adresse physique de l'hébergeur</span>{" "}
              :{" "}
              <strong className="font-normal">
                Rue Eugène Marziano 25, 1227 Les Acacias (GE), Suisse
              </strong>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Legal;
