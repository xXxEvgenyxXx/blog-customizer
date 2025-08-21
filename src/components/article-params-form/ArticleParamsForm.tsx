import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import { Text } from 'src/ui/text';
import { RadioGroup } from 'src/ui/radio-group';
import { fontSizeOptions, fontFamilyOptions, fontColors, OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(fontSizeOptions[0]);
    const [selectedFontFamily, setSelectedFontFamily] = useState<OptionType>(fontFamilyOptions[0]);
    const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(fontColors[0]);

    return (
        <>
            <ArrowButton
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            />
            <aside className={`${styles.container} ${isOpen ? styles.container_open : ''}`}>
                <form className={styles.form}>
                    <Text uppercase={true} size={31} weight={800} align={"left"}>
                        Задайте параметры
                    </Text>
                    <Select
                        selected={selectedFontFamily}
                        options={fontFamilyOptions}
                        placeholder="Выберите шрифт"
                        onChange={setSelectedFontFamily}
                        title="ШРИФТ"
                    />
                    <Select
                        selected={selectedFontColor}
                        options={fontColors}
                        placeholder="Выберите цвет шрифта"
                        onChange={setSelectedFontColor}
                        title="ЦВЕТ ШРИФТА"
                    />
                    <RadioGroup
                        name="РАЗМЕР ШРИФТА"
                        selected={selectedFontSize}
                        title="РАЗМЕР ШРИФТА"
                        options={fontSizeOptions}
                        onChange={setSelectedFontSize}
                    />
                    <Separator></Separator>

                    <div className={styles.bottomContainer}>
                        <Button title='Сбросить' htmlType='reset' type='clear' />
                        <Button title='Применить' htmlType='submit' type='apply' />
                    </div>
                </form>
            </aside>
        </>
    );
};