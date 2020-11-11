import React, {useEffect, useState} from 'react';
import {DateRange} from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type RangeDatePickerProps = {
    onChangeRange: (range: Range) => void;
    initialRange?: Range;
}

export type Range = {
    startDate?: Date;
    endDate?: Date;
    key?: string;
}

const defaultRange = {
    startDate: new Date(),
    endDate: new Date(),
}

const dateRangeKey = {
    key: 'selection'
}

const RangeDatePicker: React.FunctionComponent<RangeDatePickerProps> = (props) => {
    const [range, setRange] = useState<Range>(props.initialRange ? {...props.initialRange, ...dateRangeKey} : {...defaultRange, ...dateRangeKey});

    useEffect(() => {

        const range: Range = {...props.initialRange, ...dateRangeKey};

        setRange(range);

    }, [props.initialRange])


    const handleSelect = (ranges: any) => {
        setRange(ranges.selection);
        props.onChangeRange(ranges.selection);
    }

    console.log("range");
    console.log({...range});


    console.log("props");
    console.log({...props.initialRange});

    return (
        <DateRange
            ranges={[range]}
            onChange={handleSelect}
        />
    )
}

export default RangeDatePicker;