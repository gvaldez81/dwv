/** 
 * Application GUI.
 */

// Default colour maps.
dwv.tool.colourMaps = {
    "plain": dwv.image.lut.plain,
    "invplain": dwv.image.lut.invPlain,
    "rainbow": dwv.image.lut.rainbow,
    "hot": dwv.image.lut.hot,
    "test": dwv.image.lut.test
};
// Default window level presets.
dwv.tool.defaultpresets = {};
// Default window level presets for CT.
dwv.tool.defaultpresets.CT = {
    "mediastinum": {"center": 40, "width": 400},
    "lung": {"center": -500, "width": 1500},
    "bone": {"center": 500, "width": 2000},
    "brain": {"center": 40, "width": 80},
    "head": {"center": 90, "width": 350}
};

// Window
dwv.gui.getWindowSize = dwv.gui.base.getWindowSize;
// Progress
dwv.gui.displayProgress = dwv.gui.base.displayProgress;
// Select
dwv.gui.refreshSelect = dwv.gui.base.refreshSelect;
// Slider
dwv.gui.Slider = dwv.gui.base.Slider;
// Tags gui
dwv.gui.DicomTags = dwv.gui.base.DicomTags;

// Loaders
dwv.gui.Loadbox = dwv.gui.base.Loadbox;
// File loader
dwv.gui.FileLoad = dwv.gui.base.FileLoad;
// Url loader
dwv.gui.UrlLoad =  dwv.gui.base.UrlLoad;

// Toolbox 
dwv.gui.Toolbox = function (app)
{
    var base = new dwv.gui.base.Toolbox(app);
    
    this.setup = function (list)
    {
        base.setup(list);
        
        // toolbar
        var buttonClass = "ui-btn ui-btn-inline ui-btn-icon-notext ui-mini"; 
        
        var open = document.createElement("a");
        open.href = "#popupOpen";
        open.setAttribute("class", buttonClass + " ui-icon-plus");
        open.setAttribute("data-rel", "popup");
        open.setAttribute("data-position-to", "window");
    
        var undo = document.createElement("a");
        undo.setAttribute("class", buttonClass + " ui-icon-back");
        undo.onclick = app.onUndo;
    
        var redo = document.createElement("a");
        redo.setAttribute("class", buttonClass + " ui-icon-forward");
        redo.onclick = app.onRedo;
    
        var toggleInfo = document.createElement("a");
        toggleInfo.setAttribute("class", buttonClass + " ui-icon-info");
        toggleInfo.onclick = app.onToggleInfoLayer;
    
        var toggleSaveState = document.createElement("a");
        toggleSaveState.setAttribute("class", buttonClass + " ui-icon-action");
        toggleSaveState.onclick = app.onStateSave;
        toggleSaveState.download = "state.json";
        toggleSaveState.id = "download-state";

        var tags = document.createElement("a");
        tags.href = "#tags_page";
        tags.setAttribute("class", buttonClass + " ui-icon-grid");
    
        var node = document.getElementById("toolbar");
        node.appendChild(open);
        node.appendChild(undo);
        node.appendChild(redo);
        node.appendChild(toggleInfo);
        node.appendChild(toggleSaveState);
        node.appendChild(tags);
        $("#toolbar").trigger("create");
    };
    this.display = function (flag)
    {
        base.display(flag);
    };
    this.initialise = function (list)
    {
        base.initialise(list);
    };
};

// Window/level
dwv.gui.WindowLevel = dwv.gui.base.WindowLevel;
// Draw
dwv.gui.Draw = dwv.gui.base.Draw;
// Livewire
dwv.gui.Livewire = dwv.gui.base.Livewire;  
// ZoomAndPan
dwv.gui.ZoomAndPan = dwv.gui.base.ZoomAndPan;
// Scroll
dwv.gui.Scroll = dwv.gui.base.Scroll;
// Filter
dwv.gui.Filter = dwv.gui.base.Filter;

// Filter: threshold
dwv.gui.Threshold = dwv.gui.base.Threshold;
// Filter: sharpen
dwv.gui.Sharpen = dwv.gui.base.Sharpen;
// Filter: sobel
dwv.gui.Sobel = dwv.gui.base.Sobel;

// Undo/redo
dwv.gui.Undo = dwv.gui.base.Undo;
// Help
dwv.gui.appendHelpHtml = dwv.gui.base.appendHelpHtml;
// Version
dwv.gui.appendVersionHtml = dwv.gui.base.appendVersionHtml;
