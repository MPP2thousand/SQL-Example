import colors from '@/styles/colors';
import defaultStyles from '@/styles/defaultStyles';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const RNPickerSelect = require('react-native-picker-select');


type propsType = {
  selectedValue:number,
  setSelectedValue: (arg: number) => void;
};

const MyDropdown:React.FC<propsType> = ({
    selectedValue,
    setSelectedValue
}) => {
    const [items, setItems] = useState<{
      [x: string]: any; label: string; value: number 
}[]>([]);
      useEffect(() => {
    const transformedItems = items.map((item) => ({
      label: item.name, 
      value: item.id,   
    }));
    
    setItems(transformedItems);
  }, []);
      

      return (
        <View style={defaultStyles.container}>
          <Text style={defaultStyles.text}>Select Your Filter:</Text>
        <RNPickerSelect
            value={selectedValue} // Bind the selected value
            onValueChange={(value: number) => setSelectedValue(value as number)} // Update the selected value
            items={items} // Items that populate the dropdown
            placeholder={{ label: 'Select an option...', value: undefined }} // Placeholder text
            style={pickerSelectStyles} // Custom styles for the picker
        />
        </View> 
      );
    };

{//https://stackoverflow.com/questions/79546030/react-native-rnpickerselect-doesnt-open-on-ios
//used this to fix ios dropdown  
}

    const pickerSelectStyles = StyleSheet.create({
      inputIOS: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: colors.primary,
        borderRadius: 8,
        color: colors.textondark,
        paddingRight: 30, // to ensure the text is never behind the icon
        height: 50, 
        width: 200,
        zIndex: 100,
      },
      inputIOSContainer: {
            zIndex: 100,
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: colors.primary,
        borderRadius: 8,
        color: colors.textondark,
        paddingRight: 30, // to ensure the text is never behind the icon
        height: 70, 
        width: 200,
        
      },
    });

    export default MyDropdown;