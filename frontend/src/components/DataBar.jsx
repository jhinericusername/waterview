import { CategoryBar, Card, Flex, Text, LineChart, Title } from "@tremor/react";

const DataBar = (props) => {
    const {title, values, colors, marker} = props
    return (
        <Card className="max-w-sm mx-auto">
            <Flex>
                <Text>{title}</Text>
            </Flex>
            <CategoryBar
                values={values}
                colors={colors}
                markerValue={marker}
                className="mt-3"
            />
        </Card>
    )
}

export default DataBar