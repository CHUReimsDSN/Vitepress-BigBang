import {
  QBanner,
  QBtn,
  QBtnDropdown,
  QBtnGroup,
  QBtnToggle,
  QCard,
  QDate,
  QDialog,
  QDrawer,
  QExpansionItem,
  QField,
  QHeader,
  QIcon,
  QInput,
  QItem,
  QLayout,
  QList,
  QMenu,
  QRadio,
  QSelect,
  QTab,
  QTabs,
  QToggle,
  QTooltip,
  QTree,
  QUploader,
} from "quasar";

export function setupDefaultProps() {
  const defaultTransitionDuration = 150;
  const transitionShow = "fade";
  const transitionHide = "fade";
  const expandIcon = "keyboard_arrow_down";
  const expandIcon2 = "chevron_right";

  QLayout.props.view = {
    type: String,
    default: "lHh LpR fFf",
  };

  QBtn.props.unelevated = {
    type: Boolean,
    default: true,
  };
  QBtn.props.noCaps = {
    type: Boolean,
    default: true,
  };
  QBtn.props.dense = {
    type: Boolean,
    default: true,
  };

  QBtnGroup.props.unelevated = {
    type: Boolean,
    default: true,
  };

  QBtnDropdown.props.unelevated = {
    type: Boolean,
    default: true,
  };
  QBtnDropdown.props.noCaps = {
    type: Boolean,
    default: true,
  };
  QBtnDropdown.props.dense = {
    type: Boolean,
    default: true,
  };
  QBtnDropdown.props.dropdownIcon = {
    type: String,
    default: expandIcon,
  };

  QBtnToggle.props.unelevated = {
    type: Boolean,
    default: true,
  };
  QBtnToggle.props.noCaps = {
    type: Boolean,
    default: true,
  };
  QBtnToggle.props.dense = {
    type: Boolean,
    default: true,
  };
  
  QCard.props.bordered = {
    type: Boolean,
    default: true,
  };

  QMenu.props.transitionDuration.default = defaultTransitionDuration;

  QHeader.props.bordered = {
    type: Boolean,
    default: true,
  };

  QDrawer.props.bordered = {
    type: Boolean,
    default: true,
  };

  QItem.props.dense = {
    type: Boolean,
    default: true,
  };

  QExpansionItem.props.dense = {
    type: Boolean,
    default: true,
  };
  QExpansionItem.props.denseToggle = {
    type: Boolean,
    default: false,
  };
  QExpansionItem.props.duration = {
    type: [Number, String],
    default: defaultTransitionDuration,
  };
  QExpansionItem.props.expandIcon = {
    type: String,
    default: expandIcon,
  };

  QIcon.props.size = {
    type: String,
    default: "20px",
  };

  QTabs.props.noCaps = {
    type: Boolean,
    default: true,
  };

  QTab.props.noCaps = {
    type: Boolean,
    default: true,
  };

  QDate.props.minimal = {
    type: Boolean,
    default: true,
  };

  QList.props.dense = {
    type: Boolean,
    default: true,
  };

  QField.props.dense = {
    type: Boolean,
    default: true,
  };
  QField.props.outlined = {
    type: Boolean,
    default: true,
  };
  QField.props.hideBottomSpace = {
    type: Boolean,
    default: true,
  };

  QInput.props.dense = {
    type: Boolean,
    default: true,
  };
  QInput.props.outlined = {
    type: Boolean,
    default: true,
  };
  QInput.props.hideBottomSpace = {
    type: Boolean,
    default: true,
  };

  QSelect.props.dense = {
    type: Boolean,
    default: true,
  };
  QSelect.props.outlined = {
    type: Boolean,
    default: true,
  };
  QSelect.props.optionsDense = {
    type: Boolean,
    default: true,
  };
  QSelect.props.hideBottomSpace = {
    type: Boolean,
    default: true,
  };
  QSelect.props.dropdownIcon = {
    type: String,
    default: expandIcon,
  };

  QToggle.props.dense = {
    type: Boolean,
    default: true,
  };

  QRadio.props.dense = {
    type: Boolean,
    default: true,
  };

  QUploader.props.bordered = {
    type: Boolean,
    default: true,
  };

  QTooltip.props.transitionDuration.default = defaultTransitionDuration;
  QTooltip.props.transitionShow.default = transitionShow;
  QTooltip.props.transitionHide.default = transitionHide;

  QBanner.props.dense = {
    type: Boolean,
    default: true,
  };

  QDialog.props.transitionDuration.default = defaultTransitionDuration;
  QDialog.props.transitionShow = {
    type: String,
    default: transitionShow,
  };
  QDialog.props.transitionHide = {
    type: String,
    default: transitionHide,
  };

  QTree.props.dense = {
    type: Boolean,
    default: true,
  };
  QTree.props.duration.default = defaultTransitionDuration;
  QTree.props.noConnectors = {
    type: Boolean,
    default: true,
  };
  QTree.props.icon = {
    type: String,
    default: expandIcon2,
  };
}
