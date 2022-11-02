import { ReactElement, createElement, ReactNode } from "react";
import {
    //  CurrentTabStyleEnum, 
    TabBadgeStyleEnum, TabCaptionTypeEnum } from "../../typings/ControllableTabContainerProps";
import Badge from "./Badge";

type tabTagProps = {
    isCurrentTab: boolean;
    tabCaptionType: TabCaptionTypeEnum;
    tabCaptionText: string;
    tabCaptionHTML: string;
    tabCaptionContent: ReactNode;
    // currentTabStyle: CurrentTabStyleEnum;
    badgeStyle: TabBadgeStyleEnum;
    badgeContent?: string;
    onTabClick: () => void;
};

function TabTag({
    isCurrentTab,
    tabCaptionType,
    tabCaptionContent,
    tabCaptionText,
    tabCaptionHTML,
    onTabClick,
    // currentTabStyle,
    badgeStyle,
    badgeContent
}: tabTagProps): ReactElement {
    const renderCaption = (): ReactNode => {
        switch (tabCaptionType) {
            case "text":
                return <span className="mx-text">{tabCaptionText}</span>;
            case "html":
                return (
                    <span
                        dangerouslySetInnerHTML={{
                            __html: tabCaptionHTML
                        }}
                    ></span>
                );
            case "custom":
                return tabCaptionContent;
        }
    };

    return (
        <div
            className={
                isCurrentTab
                    ? "ctc-tab-tag ctc-tab-tag-active"
                    : "ctc-tab-tag"
            }
            onClick={() => onTabClick()}
        >
            {renderCaption()}
            <Badge badgeStyle={badgeStyle} badgeContent={badgeContent} />
        </div>
    );
}
export default TabTag;