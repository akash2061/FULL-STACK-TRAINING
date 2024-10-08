import { notFound } from "next/navigation";

export default function ConceptId({ params }) {
    if (params.conceptId > 20) {
        notFound();
    }
    return <h1>Docs - Features - {params.featureId} - Concepts - {params.conceptId}</h1>
}