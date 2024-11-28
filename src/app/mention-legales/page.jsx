import Head from "next/head";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Mentions() {
  return (
    <main>
      <SubHeader />
      <Header />
      <section className="py-[40px]">
        <Head>
          <title>Mentions légales france puits canadien </title>
        </Head>

        <div style={{ display: "none" }}>
          <h1>Mentions legales VBA calculateur Renault</h1>
        </div>
        <div className="container mx-auto  rounded-2xl text-gray-700 px-5">
          <div className="py-5">
            <h1 className="text-3xl font-bold mb-4">Mentions Légales</h1>

            <div className="mb-8">
              <h2 className="text-[15px] font-bold mb-2">
                1. PRÉSENTATION DU SITE.
              </h2>
              <p>
                En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004
                pour la confiance dans l’économie numérique, il est précisé aux
                utilisateurs du site www.france-puits-candien.fr l’identité des
                différents intervenants dans le cadre de sa réalisation et de
                son suivi :
              </p>
              <h2 className="text-[15px] font-bold my-2">
                Éditeur et directeur de publication:
              </h2>
              <p>FRANCE PUITS CANADIEN</p>
              <h2 className="text-[15px] font-bold my-2">Siège social:</h2>
              <ul className=" mt-2">
                <li>83avenuePaul Doumer</li>
                <li>93330NEUILLY SUR MARNE</li>
                <li>Tél.: 0757831203</li>
                <li>Siret: 752511048</li>
              </ul>
              <h2 className="text-[15px] font-bold my-2">
                Réalisation et hébergement :
              </h2>
              <p>Click @ Trust</p>
              <h2 className="text-[15px] font-bold my-2">Siège social:</h2>
              <p>110, rue de fontenay</p>
              <p>94300 VINCENNES</p>
              <p>Tél. : 09 63 51 87 34</p>
            </div>

            <div className="mb-8">
              <h2 className="text-[15px] font-bold mb-2">
                2. CONDITIONS GÉNÉRALES D’UTILISATION DU SITE ET DES SERVICES
                PROPOSÉS.
              </h2>
              <p>
                L’utilisation du site www.france-puits-canadien.fr et/ou de
                l’application mobile associée implique l’acceptation pleine et
                entière des conditions générales d’utilisation ci-après
                décrites. Ces conditions d’utilisation sont susceptibles d’être
                modifiées ou complétées à tout moment, les utilisateurs du site
                www.france-puits-canadien.fr et/ou de l’application mobile
                associée sont donc invités à les consulter de manière régulière.
              </p>
              <p className="my-2">
                Ce site et/ou de l’application mobile associée est normalement
                accessible à tout moment aux utilisateurs. Une interruption pour
                raison de maintenance technique peut être toutefois décidée par
                FRANCE PUITS CANADIEN, qui s’efforcera alors de communiquer
                préalablement aux utilisateurs les dates et heures de
                l’intervention.
              </p>
              <p>
                Le site https://france-puits-canadien.fr et/ou de l’application
                mobile associée sont mis à jour régulièrement par FRANCE PUITS
                CANADIEN. De la même façon, les mentions légales peuvent être
                modifiées à tout moment : elles s’imposent néanmoins à
                l’utilisateur qui est invité à s’y référer le plus souvent
                possible afin d’en prendre connaissance.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                3. DESCRIPTION DES SERVICES FOURNIS.
              </h2>
              <p>
                Le site https://france-puits-canadien.fr et/ou de l’application
                mobile associée ont pour objet de fournir une information
                concernant l’ensemble des activités de la société.
              </p>
              <p className="my-2">
                FRANCE PUITS CANADIEN s’efforce de fournir sur le site
                https://france-puits-canadien.fret/ou l’application mobile
                associée des informations aussi précises que possible.
                Toutefois, il ne pourra être tenue responsable des omissions,
                des inexactitudes et des carences dans la mise à jour, qu’elles
                soient de son fait ou du fait des tiers partenaires qui lui
                fournissent ces informations.
              </p>
              <p>
                Tous les informations indiquées sur le site
                https://france-puits-canadien.fret/ou l’application mobile
                associée sont données à titre indicatif, et sont susceptibles
                d’évoluer. Par ailleurs, les renseignements figurant sur le site
                https://france-puits-canadien.fret/ou l’application mobile
                associée ne sont pas exhaustifs. Ils sont donnés sous réserve de
                modifications ayant été apportées depuis leur mise en ligne.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                4. LIMITATIONS CONTRACTUELLES SUR LES DONNÉES TECHNIQUES.
              </h2>
              <p>Le site utilise la technologie JavaScript./Next.js</p>
              <p>
                Le site Internet ne pourra être tenu responsable de dommages
                matériels liés à l’utilisation du site. De plus, l’utilisateur
                du site s’engage à accéder au site en utilisant un matériel
                récent, ne contenant pas de virus et avec un navigateur de
                dernière génération mis-à-jour.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">5. CRÉDIT PHOTOS:</h2>
              <ul className="list-disc pl-6 mt-2">
                <li>Fotolia - Tous droits réservés.</li>
                <li>Adobe Stock - Tous droits réservés.</li>
                <li>Shutterstock - Tous droits réservés.</li>
                <li>Siret: 752511048</li>
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                6. PROPRIÉTÉ INTELLECTUELLE ET CONTREFAÇONS.
              </h2>
              <p>
                Toute reproduction, représentation, publication, adaptation de
                tout ou partie des éléments du site et/ou de l’application
                mobile associée, quel que soit le moyen ou le procédé utilisé,
                est interdite, sauf autorisation écrite préalable de : Click &
                Trust.
              </p>
              <p className="mt-2">
                Toute exploitation non autorisée du site et/ou de l’application
                mobile associée ou de l’un des éléments qu’ils contiennent sera
                considérée comme constitutive d’une contrefaçon et poursuivie
                conformément aux dispositions des articles L.335-2 et suivants
                du Code de Propriété Intellectuelle.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                7. LIMITATIONS DE RESPONSABILITÉ.
              </h2>
              <p>
                FRANCE PUITS CANADIEN ne pourra être tenue responsable des
                dommages directs et indirects causés au matériel de
                l’utilisateur, lors de l’accès au site
                https://france-puits-canadien.fret/ou à l’application mobile
                associée, et résultant soit de l’utilisation d’un matériel ne
                répondant pas aux spécifications indiquées au point 4, soit de
                l’apparition d’un bug ou d’une incompatibilité.
              </p>
              <p className="my-2">
                FRANCE PUITS CANADIEN ne pourra également être tenue responsable
                des dommages indirects (tels par exemple qu’une perte de marché
                ou perte d’une chance) consécutifs à l’utilisation du site
                https://france-puits-canadien.fret/ou de l’application mobile
                associée.
              </p>
              <p>
                Des espaces interactifs (possibilité de poser des questions dans
                l’espace contact) sont à la disposition des utilisateurs. F se
                réserve le droit de supprimer, sans mise en demeure préalable,
                tout contenu déposé dans cet espace qui contreviendrait à la
                législation applicable en France, en particulier aux
                dispositions relatives à la protection des données. Le cas
                échéant, FRANCE PUITS CANADIEN se réserve également la
                possibilité de mettre en cause la responsabilité civile et/ou
                pénale de l’utilisateur, notamment en cas de message à caractère
                raciste, injurieux, diffamant, ou pornographique, quel que soit
                le support utilisé (texte, photographie…).
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[30px]l font-bold mb-2">
                8. GESTION DES DONNÉES PERSONNELLES.
              </h2>
              <p>
                En France, les données personnelles sont notamment protégées par
                la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août
                2004, l’article L. 226-13 du Code pénal et la Directive
                Européenne du 24 octobre 1995.
              </p>
              <p className="my-2">
                A l’occasion de l’utilisation du site
                https://france-puits-canadien.fret/ou de l’application mobile
                associée, peuvent êtres recueillies : l’URL des liens par
                l’intermédiaire desquels l’utilisateur a accédé au site
                https://france-puits-canadien.fr et l’adresse de protocole
                Internet (IP) de l’utilisateur.
              </p>
              <p>
                En tout état de cause FRANCE PUITS CANADIEN ne collecte des
                informations personnelles relatives à l’utilisateur que pour le
                besoin de certains services proposés par le site
                https://france-puits-canadien.fr et/ou l’application mobile
                associée. L’utilisateur fournit ces informations en toute
                connaissance de cause, notamment lorsqu’il procède par lui-même
                à leur saisie. Il est alors précisé à l’utilisateur l’obligation
                ou non de fournir ces informations.
              </p>
              <p className="my-2">
                Conformément aux dispositions des articles 38 et suivants de la
                loi 78-17 du 6 janvier 1978 relative à l’informatique, aux
                fichiers et aux libertés, tout utilisateur dispose d’un droit
                d’accès, de rectification et d’opposition aux données
                personnelles le concernant, en effectuant sa demande écrite et
                signée, accompagnée d’une copie du titre d’identité avec
                signature du titulaire de la pièce, en précisant l’adresse à
                laquelle la réponse doit être envoyée au 83 avenue paul doumer,
                93330 NEUILLY SUR MARNE
              </p>
              <p>
                Aucune information personnelle de l’utilisateur du site
                https://france-puits-canadien.fr et/ou de l’application mobile
                associée n’est publiée à l’insu de l’utilisateur, échangée,
                transférée, cédée ou vendue sur un support quelconque à des
                tiers. Seule l’hypothèse du rachat de FRANCE PUITS CANADIEN et
                de ses droits permettrait la transmission des dites informations
                à l’éventuel acquéreur qui serait à son tour tenu de la même
                obligation de conservation et de modification des données vis à
                vis de l’utilisateur du site https://france-puits-canadien.fr
                et/ou de l’application mobile.
              </p>
              <p className="mt-2">
                Les bases de données sont protégées par les dispositions de la
                loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars
                1996 relative à la protection juridique des bases de données.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[15px] font-bold mb-2">
                9. LES PRINCIPALES LOIS CONCERNÉES.
              </h2>
              <p>
                Utilisateur : Internaute se connectant, utilisant le site ou
                l’application susnommé.
              </p>
              <p className="mt-2">
                {" "}
                Informations personnelles : « les informations qui permettent,
                sous quelque forme que ce soit, directement ou non,
                l’identification des personnes physiques auxquelles elles
                s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-[15px] font-bold mb-2">11. PARTENAIRES :</h2>
              <p>
                Email du Délégué protection des données :
                contact@france-puits-canadien.fr
              </p>
              <p className="mt-2">
                Le site https://france-puits-canadien.fr est hébergé par :
                02SWITCH
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
