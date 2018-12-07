type ContentLoadedFn = () => Promise<void>;

type ContentLoadedExport = ContentLoadedFn & { default: ContentLoadedFn };

declare const contentLoaded: ContentLoadedExport;

export = contentLoaded;
