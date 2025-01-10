import Title from "@/templates/components/Title";
import ExpandScript from "@/templates/components/ExpandScript";

type ExpandItemsProps = {
    questions: {
        key: string;
        heading: string;
        paragraph: string;
    }[]
}

export function ExpandItems(
    {
        questions
    }: ExpandItemsProps
) {

    return (
        questions.map((question) =>
            <div key={question.key}>
                <ExpandScript>
                    <Title
                       heading_text={question.heading}
                       secondary_text={question.paragraph}
                       heading_size={"20"}
                       heading_tag={"h3"} />
                </ExpandScript>
            </div>
        )
    )
}

export default ExpandItems;