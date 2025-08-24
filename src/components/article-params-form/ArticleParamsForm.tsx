import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState, useEffect, SyntheticEvent } from 'react';
import { Text } from 'src/ui/text';
import { RadioGroup } from 'src/ui/radio-group';
import {
    fontSizeOptions,
    fontFamilyOptions,
    fontColors,
    backgroundColors,
    contentWidthArr,
    OptionType
} from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import { Separator } from 'src/ui/separator';
import { defaultArticleState,ArticleStateType } from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({
	currentArticleState,
	setCurrentArticleState,
}:{
	currentArticleState: ArticleStateType;
	setCurrentArticleState: (param: ArticleStateType) => void;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFontSize, setSelectedFontSize] = useState<OptionType>(defaultArticleState.fontSizeOption);
    const [selectedFontFamily, setSelectedFontFamily] = useState<OptionType>(defaultArticleState.fontFamilyOption);
    const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(defaultArticleState.fontColor);
    const [selectedBackgroundColor, setSelectedBackgroundColor] = useState<OptionType>(defaultArticleState.backgroundColor);
    const [selectedContentWidth, setSelectedContentWidth] = useState<OptionType>(defaultArticleState.contentWidth);

    // Функция применения стилей
    const handleSubmit  = (event: SyntheticEvent) => {
		event?.preventDefault();
		setCurrentArticleState({
			fontFamilyOption: selectedFontFamily,
			fontColor: selectedFontColor,
			backgroundColor: selectedBackgroundColor,
			contentWidth: selectedContentWidth,
			fontSizeOption: selectedFontSize,
		});
	};

    // Функция сброса стилей
    const handleReset = () => {
        setSelectedFontFamily(defaultArticleState.fontFamilyOption);
        setSelectedFontColor(defaultArticleState.fontColor);
        setSelectedBackgroundColor(defaultArticleState.backgroundColor);
        setSelectedContentWidth(defaultArticleState.contentWidth);
        setSelectedFontSize(defaultArticleState.fontSizeOption);
		setCurrentArticleState({
			fontFamilyOption: defaultArticleState.fontFamilyOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
			fontSizeOption: defaultArticleState.fontSizeOption,
		});
    };

    return (
        <>
            <ArrowButton
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            />
            <aside className={`${styles.container} ${isOpen ? styles.container_open : ''}`}>
                <form className={styles.form} onSubmit={handleSubmit}
				onReset={handleReset}>
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
					<RadioGroup
                        name="РАЗМЕР ШРИФТА"
                        selected={selectedFontSize}
                        title="РАЗМЕР ШРИФТА"
                        options={fontSizeOptions}
                        onChange={setSelectedFontSize}
                    />
                    <Select
                        selected={selectedFontColor}
                        options={fontColors}
                        placeholder="Выберите цвет шрифта"
                        onChange={setSelectedFontColor}
                        title="ЦВЕТ ШРИФТА"
                    />
                    <Separator></Separator>
                    <Select
                        selected={selectedBackgroundColor}
                        options={backgroundColors}
                        placeholder="Выберите цвет фона"
                        onChange={setSelectedBackgroundColor}
                        title="ЦВЕТ ФОНА"
                    />
                    <Select
                        selected={selectedContentWidth}
                        options={contentWidthArr}
                        placeholder="Выберите ширину контента"
                        onChange={setSelectedContentWidth}
                        title="ШИРИНА КОНТЕНТА"
                    />
                    <div className={styles.bottomContainer}>
                        <Button title='Сбросить' htmlType='reset' type='clear' />
                        <Button title='Применить' htmlType='submit' type='apply'/>
                    </div>
                </form>
            </aside>
        </>
    );
};