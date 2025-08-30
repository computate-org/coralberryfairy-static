Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    ]).then(() => {

  document.querySelector('#pageFacetRangeDoll')?.addEventListener('change', (event) => {
    facetRangeChange('Doll', event.target.value);
  });

  document.querySelector('#pageSelectSortDoll_created')?.addEventListener('change', (event) => {
    sort('Doll', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'created', true);
  });
  document.querySelector('#pageStatsDoll_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'created', false);
  });

  document.querySelector('#pageSelectSortDoll_modified')?.addEventListener('change', (event) => {
    sort('Doll', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'modified', true);
  });
  document.querySelector('#pageStatsDoll_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'modified', false);
  });

  document.querySelector('#pageSelectSortDoll_archived')?.addEventListener('change', (event) => {
    sort('Doll', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'archived', true);
  });
  document.querySelector('#pageStatsDoll_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'archived', false);
  });

  document.querySelector('#pageSelectSortDoll_name')?.addEventListener('change', (event) => {
    sort('Doll', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'name', true);
  });
  document.querySelector('#pageStatsDoll_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'name', false);
  });

  document.querySelector('#pageSelectSortDoll_description')?.addEventListener('change', (event) => {
    sort('Doll', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'description', true);
  });
  document.querySelector('#pageStatsDoll_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'description', false);
  });

  document.querySelector('#pageSelectSortDoll_price')?.addEventListener('change', (event) => {
    sort('Doll', 'price', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_price')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'price', true);
  });
  document.querySelector('#pageStatsDoll_price')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'price', false);
  });

  document.querySelector('#pageSelectSortDoll_pageId')?.addEventListener('change', (event) => {
    sort('Doll', 'pageId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_pageId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'pageId', true);
  });
  document.querySelector('#pageStatsDoll_pageId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'pageId', false);
  });

  document.querySelector('#pageSelectSortDoll_displayPage')?.addEventListener('change', (event) => {
    sort('Doll', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'displayPage', true);
  });
  document.querySelector('#pageStatsDoll_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortDoll_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Doll', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsDoll_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortDoll_classSimpleName')?.addEventListener('change', (event) => {
    sort('Doll', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsDoll_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortDoll_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Doll', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsDoll_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortDoll_saves')?.addEventListener('change', (event) => {
    sort('Doll', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'saves', true);
  });
  document.querySelector('#pageStatsDoll_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'saves', false);
  });

  document.querySelector('#pageSelectSortDoll_objectTitle')?.addEventListener('change', (event) => {
    sort('Doll', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'objectTitle', true);
  });
  document.querySelector('#pageStatsDoll_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortDoll_editPage')?.addEventListener('change', (event) => {
    sort('Doll', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'editPage', true);
  });
  document.querySelector('#pageStatsDoll_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'editPage', false);
  });

  document.querySelector('#pageSelectSortDoll_userPage')?.addEventListener('change', (event) => {
    sort('Doll', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'userPage', true);
  });
  document.querySelector('#pageStatsDoll_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'userPage', false);
  });

  document.querySelector('#pageSelectSortDoll_download')?.addEventListener('change', (event) => {
    sort('Doll', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'download', true);
  });
  document.querySelector('#pageStatsDoll_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'download', false);
  });

  document.querySelector('#pageSelectSortDoll_objectSuggest')?.addEventListener('change', (event) => {
    sort('Doll', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsDoll_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortDoll_objectText')?.addEventListener('change', (event) => {
    sort('Doll', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'objectText', true);
  });
  document.querySelector('#pageStatsDoll_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'objectText', false);
  });

  document.querySelector('#pageSelectSortDoll_solrId')?.addEventListener('change', (event) => {
    sort('Doll', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'solrId', true);
  });
  document.querySelector('#pageStatsDoll_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'solrId', false);
  });

  document.querySelector('#pageSelectSortDoll_resourceUri')?.addEventListener('change', (event) => {
    sort('Doll', 'resourceUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_resourceUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'resourceUri', true);
  });
  document.querySelector('#pageStatsDoll_resourceUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'resourceUri', false);
  });

  document.querySelector('#pageSelectSortDoll_templateUri')?.addEventListener('change', (event) => {
    sort('Doll', 'templateUri', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_templateUri')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'templateUri', true);
  });
  document.querySelector('#pageStatsDoll_templateUri')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'templateUri', false);
  });

  document.querySelector('#pageSelectSortDoll_emailTemplate')?.addEventListener('change', (event) => {
    sort('Doll', 'emailTemplate', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_emailTemplate')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'emailTemplate', true);
  });
  document.querySelector('#pageStatsDoll_emailTemplate')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'emailTemplate', false);
  });

  document.querySelector('#pageSelectSortDoll_storeUrl')?.addEventListener('change', (event) => {
    sort('Doll', 'storeUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_storeUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'storeUrl', true);
  });
  document.querySelector('#pageStatsDoll_storeUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'storeUrl', false);
  });

  document.querySelector('#pageSelectSortDoll_instagramUrl')?.addEventListener('change', (event) => {
    sort('Doll', 'instagramUrl', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_instagramUrl')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'instagramUrl', true);
  });
  document.querySelector('#pageStatsDoll_instagramUrl')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'instagramUrl', false);
  });

  document.querySelector('#pageSelectSortDoll_title')?.addEventListener('change', (event) => {
    sort('Doll', 'title', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_title')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'title', true);
  });
  document.querySelector('#pageStatsDoll_title')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'title', false);
  });

  document.querySelector('#pageSelectSortDoll_productNum')?.addEventListener('change', (event) => {
    sort('Doll', 'productNum', event.currentTarget.value);
  });

  document.querySelector('#pageStatsDoll_productNum')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Doll', 'productNum', true);
  });
  document.querySelector('#pageStatsDoll_productNum')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Doll', 'productNum', false);
  });

  document.querySelector('#htmButton_patchDoll')?.addEventListener('click', (event) => {
    document.querySelector('#patchDollDialog').open = true;
  });

  document.querySelector('#htmButton_postDoll')?.addEventListener('click', (event) => {
    document.querySelector('#postDollDialog').open = true;
  });

  document.querySelector('#htmButton_deleteDoll')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var pageId =  event.currentTarget.getAttribute('data-pageId');
      deleteDoll(
          event.currentTarget
          , pageId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_putimportDoll')?.addEventListener('click', (event) => {
    document.querySelector('#putimportDollDialog').open = true;
  });

  document.querySelector('#htmButton_searchpageDoll')?.addEventListener('click', (event) => {
    document.querySelector('#searchpageDollDialog').open = true;
  });

  document.querySelector('#htmButton_deletefilterDoll')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterDoll(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
          document.querySelector('#fqDoll_created')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_created')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_created')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_name')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_name')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_name')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_description')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_description')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_description')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_price')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_price')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_price')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_price')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_pageId')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_pageId')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_pageId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_displayPage')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_resourceUri')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_resourceUri')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_resourceUri')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_resourceUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_templateUri')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_templateUri')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_templateUri')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_templateUri')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_emailTemplate')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_emailTemplate')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_emailTemplate')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_storeUrl')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_storeUrl')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_storeUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_instagramUrl')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_instagramUrl')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_instagramUrl')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_instagramUrl')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
          document.querySelector('#fqDoll_productNum')?.addEventListener('change', (event) => {
            fqChange('Doll', event.currentTarget);
          });
          document.querySelector('#buttonFacetDoll_productNum')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotDoll_productNum')?.addEventListener('change', (event) => {
            facetPivotChange('Doll', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapDoll_productNum')?.addEventListener('change', (event) => {
            facetRangeGapChange('Doll', event.currentTarget);
          });
});
