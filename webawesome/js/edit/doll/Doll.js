
// Search //

async function searchDoll($formFilters, success, error) {
  var filters = searchDollFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchDollVals(filters, target, success, error);
}

function searchDollFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterPrice = $formFilters.querySelector('.valuePrice')?.value;
    if(filterPrice != null && filterPrice !== '')
      filters.push({ name: 'fq', value: 'price:' + filterPrice });

    var filterUri = $formFilters.querySelector('.valueUri')?.value;
    if(filterUri != null && filterUri !== '')
      filters.push({ name: 'fq', value: 'uri:' + filterUri });

    var filterUrl = $formFilters.querySelector('.valueUrl')?.value;
    if(filterUrl != null && filterUrl !== '')
      filters.push({ name: 'fq', value: 'url:' + filterUrl });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterPageId = $formFilters.querySelector('.valuePageId')?.value;
    if(filterPageId != null && filterPageId !== '')
      filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

    var filterResourceUri = $formFilters.querySelector('.valueResourceUri')?.value;
    if(filterResourceUri != null && filterResourceUri !== '')
      filters.push({ name: 'fq', value: 'resourceUri:' + filterResourceUri });

    var filterTemplateUri = $formFilters.querySelector('.valueTemplateUri')?.value;
    if(filterTemplateUri != null && filterTemplateUri !== '')
      filters.push({ name: 'fq', value: 'templateUri:' + filterTemplateUri });

    var filterEmailTemplate = $formFilters.querySelector('.valueEmailTemplate')?.value;
    if(filterEmailTemplate != null && filterEmailTemplate !== '')
      filters.push({ name: 'fq', value: 'emailTemplate:' + filterEmailTemplate });

    var filterStoreUrl = $formFilters.querySelector('.valueStoreUrl')?.value;
    if(filterStoreUrl != null && filterStoreUrl !== '')
      filters.push({ name: 'fq', value: 'storeUrl:' + filterStoreUrl });

    var filterInstagramUrl = $formFilters.querySelector('.valueInstagramUrl')?.value;
    if(filterInstagramUrl != null && filterInstagramUrl !== '')
      filters.push({ name: 'fq', value: 'instagramUrl:' + filterInstagramUrl });

    var filterTitle = $formFilters.querySelector('.valueTitle')?.value;
    if(filterTitle != null && filterTitle !== '')
      filters.push({ name: 'fq', value: 'title:' + filterTitle });

    var filterProductNum = $formFilters.querySelector('.valueProductNum')?.value;
    if(filterProductNum != null && filterProductNum !== '')
      filters.push({ name: 'fq', value: 'productNum:' + filterProductNum });

    var filterImageUri = $formFilters.querySelector('.valueImageUri')?.value;
    if(filterImageUri != null && filterImageUri !== '')
      filters.push({ name: 'fq', value: 'imageUri:' + filterImageUri });
  }
  return filters;
}

function searchDollVals(filters, target, success, error) {

  fetch(
    '/api/product/doll?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function suggestDollObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-solid fa-reel"></i>');
        var $span = document.createElement('span');        $span.setAttribute('class', '');        $span.innerText = o['objectTitle'];
        var $li = document.createElement('li');
        var $a = document.createElement('a').setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchDollVals($formFilters, target, success, error);
}

// GET //

async function getDoll() {
  fetch(
    '/api/product/doll/' + null
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PATCH //

async function patchDoll($formFilters, $formValues, target, , success, error) {
  var filters = patchDollFilters($formFilters);

  var vals = {};

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value === 'true';
  var setCreated = removeCreated ? null : $formValues.querySelector('.setCreated')?.value;
  var addCreated = $formValues.querySelector('.addCreated')?.value;
  if(removeCreated || setCreated != null && setCreated !== '')
    vals['setCreated'] = setCreated;
  if(addCreated != null && addCreated !== '')
    vals['addCreated'] = addCreated;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value;
  if(removeCreated != null && removeCreated !== '')
    vals['removeCreated'] = removeCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  var removeModified = $formValues.querySelector('.removeModified')?.value === 'true';
  var setModified = removeModified ? null : $formValues.querySelector('.setModified')?.value;
  var addModified = $formValues.querySelector('.addModified')?.value;
  if(removeModified || setModified != null && setModified !== '')
    vals['setModified'] = setModified;
  if(addModified != null && addModified !== '')
    vals['addModified'] = addModified;
  var removeModified = $formValues.querySelector('.removeModified')?.value;
  if(removeModified != null && removeModified !== '')
    vals['removeModified'] = removeModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  var removeArchived = $formValues.querySelector('.removeArchived')?.value === 'true';
  if(valueArchived != null)
    valueArchived = valueArchived === 'true';
  var valueArchivedSelectVal = $formValues.querySelector('select.setArchived')?.value;
  if(valueArchivedSelectVal != null)
    valueArchivedSelectVal = valueArchivedSelectVal === 'true';
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.querySelector('.addArchived')?.checked;
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.querySelector('.removeArchived')?.checked;
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueName = $formValues.querySelector('.valueName')?.value;
  var removeName = $formValues.querySelector('.removeName')?.value === 'true';
  var setName = removeName ? null : $formValues.querySelector('.setName')?.value;
  var addName = $formValues.querySelector('.addName')?.value;
  if(removeName || setName != null && setName !== '')
    vals['setName'] = setName;
  if(addName != null && addName !== '')
    vals['addName'] = addName;
  var removeName = $formValues.querySelector('.removeName')?.value;
  if(removeName != null && removeName !== '')
    vals['removeName'] = removeName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value === 'true';
  var setDescription = removeDescription ? null : $formValues.querySelector('.setDescription')?.value;
  var addDescription = $formValues.querySelector('.addDescription')?.value;
  if(removeDescription || setDescription != null && setDescription !== '')
    vals['setDescription'] = setDescription;
  if(addDescription != null && addDescription !== '')
    vals['addDescription'] = addDescription;
  var removeDescription = $formValues.querySelector('.removeDescription')?.value;
  if(removeDescription != null && removeDescription !== '')
    vals['removeDescription'] = removeDescription;

  var valuePrice = $formValues.querySelector('.valuePrice')?.value;
  var removePrice = $formValues.querySelector('.removePrice')?.value === 'true';
  var setPrice = removePrice ? null : $formValues.querySelector('.setPrice')?.value;
  var addPrice = $formValues.querySelector('.addPrice')?.value;
  if(removePrice || setPrice != null && setPrice !== '')
    vals['setPrice'] = setPrice;
  if(addPrice != null && addPrice !== '')
    vals['addPrice'] = addPrice;
  var removePrice = $formValues.querySelector('.removePrice')?.value;
  if(removePrice != null && removePrice !== '')
    vals['removePrice'] = removePrice;

  var valueUri = $formValues.querySelector('.valueUri')?.value;
  var removeUri = $formValues.querySelector('.removeUri')?.value === 'true';
  var setUri = removeUri ? null : $formValues.querySelector('.setUri')?.value;
  var addUri = $formValues.querySelector('.addUri')?.value;
  if(removeUri || setUri != null && setUri !== '')
    vals['setUri'] = setUri;
  if(addUri != null && addUri !== '')
    vals['addUri'] = addUri;
  var removeUri = $formValues.querySelector('.removeUri')?.value;
  if(removeUri != null && removeUri !== '')
    vals['removeUri'] = removeUri;

  var valueUrl = $formValues.querySelector('.valueUrl')?.value;
  var removeUrl = $formValues.querySelector('.removeUrl')?.value === 'true';
  var setUrl = removeUrl ? null : $formValues.querySelector('.setUrl')?.value;
  var addUrl = $formValues.querySelector('.addUrl')?.value;
  if(removeUrl || setUrl != null && setUrl !== '')
    vals['setUrl'] = setUrl;
  if(addUrl != null && addUrl !== '')
    vals['addUrl'] = addUrl;
  var removeUrl = $formValues.querySelector('.removeUrl')?.value;
  if(removeUrl != null && removeUrl !== '')
    vals['removeUrl'] = removeUrl;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value === 'true';
  var setDisplayPage = removeDisplayPage ? null : $formValues.querySelector('.setDisplayPage')?.value;
  var addDisplayPage = $formValues.querySelector('.addDisplayPage')?.value;
  if(removeDisplayPage || setDisplayPage != null && setDisplayPage !== '')
    vals['setDisplayPage'] = setDisplayPage;
  if(addDisplayPage != null && addDisplayPage !== '')
    vals['addDisplayPage'] = addDisplayPage;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value;
  if(removeDisplayPage != null && removeDisplayPage !== '')
    vals['removeDisplayPage'] = removeDisplayPage;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value === 'true';
  var setObjectTitle = removeObjectTitle ? null : $formValues.querySelector('.setObjectTitle')?.value;
  var addObjectTitle = $formValues.querySelector('.addObjectTitle')?.value;
  if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
    vals['setObjectTitle'] = setObjectTitle;
  if(addObjectTitle != null && addObjectTitle !== '')
    vals['addObjectTitle'] = addObjectTitle;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value;
  if(removeObjectTitle != null && removeObjectTitle !== '')
    vals['removeObjectTitle'] = removeObjectTitle;

  var valueSolrId = $formValues.querySelector('.valueSolrId')?.value;
  var removeSolrId = $formValues.querySelector('.removeSolrId')?.value === 'true';
  var setSolrId = removeSolrId ? null : $formValues.querySelector('.setSolrId')?.value;
  var addSolrId = $formValues.querySelector('.addSolrId')?.value;
  if(removeSolrId || setSolrId != null && setSolrId !== '')
    vals['setSolrId'] = setSolrId;
  if(addSolrId != null && addSolrId !== '')
    vals['addSolrId'] = addSolrId;
  var removeSolrId = $formValues.querySelector('.removeSolrId')?.value;
  if(removeSolrId != null && removeSolrId !== '')
    vals['removeSolrId'] = removeSolrId;

  var valuePageId = $formValues.querySelector('.valuePageId')?.value;
  var removePageId = $formValues.querySelector('.removePageId')?.value === 'true';
  var setPageId = removePageId ? null : $formValues.querySelector('.setPageId')?.value;
  var addPageId = $formValues.querySelector('.addPageId')?.value;
  if(removePageId || setPageId != null && setPageId !== '')
    vals['setPageId'] = setPageId;
  if(addPageId != null && addPageId !== '')
    vals['addPageId'] = addPageId;
  var removePageId = $formValues.querySelector('.removePageId')?.value;
  if(removePageId != null && removePageId !== '')
    vals['removePageId'] = removePageId;

  var valueResourceUri = $formValues.querySelector('.valueResourceUri')?.value;
  var removeResourceUri = $formValues.querySelector('.removeResourceUri')?.value === 'true';
  var setResourceUri = removeResourceUri ? null : $formValues.querySelector('.setResourceUri')?.value;
  var addResourceUri = $formValues.querySelector('.addResourceUri')?.value;
  if(removeResourceUri || setResourceUri != null && setResourceUri !== '')
    vals['setResourceUri'] = setResourceUri;
  if(addResourceUri != null && addResourceUri !== '')
    vals['addResourceUri'] = addResourceUri;
  var removeResourceUri = $formValues.querySelector('.removeResourceUri')?.value;
  if(removeResourceUri != null && removeResourceUri !== '')
    vals['removeResourceUri'] = removeResourceUri;

  var valueTemplateUri = $formValues.querySelector('.valueTemplateUri')?.value;
  var removeTemplateUri = $formValues.querySelector('.removeTemplateUri')?.value === 'true';
  var setTemplateUri = removeTemplateUri ? null : $formValues.querySelector('.setTemplateUri')?.value;
  var addTemplateUri = $formValues.querySelector('.addTemplateUri')?.value;
  if(removeTemplateUri || setTemplateUri != null && setTemplateUri !== '')
    vals['setTemplateUri'] = setTemplateUri;
  if(addTemplateUri != null && addTemplateUri !== '')
    vals['addTemplateUri'] = addTemplateUri;
  var removeTemplateUri = $formValues.querySelector('.removeTemplateUri')?.value;
  if(removeTemplateUri != null && removeTemplateUri !== '')
    vals['removeTemplateUri'] = removeTemplateUri;

  var valueEmailTemplate = $formValues.querySelector('.valueEmailTemplate')?.value;
  var removeEmailTemplate = $formValues.querySelector('.removeEmailTemplate')?.value === 'true';
  var setEmailTemplate = removeEmailTemplate ? null : $formValues.querySelector('.setEmailTemplate')?.value;
  var addEmailTemplate = $formValues.querySelector('.addEmailTemplate')?.value;
  if(removeEmailTemplate || setEmailTemplate != null && setEmailTemplate !== '')
    vals['setEmailTemplate'] = setEmailTemplate;
  if(addEmailTemplate != null && addEmailTemplate !== '')
    vals['addEmailTemplate'] = addEmailTemplate;
  var removeEmailTemplate = $formValues.querySelector('.removeEmailTemplate')?.value;
  if(removeEmailTemplate != null && removeEmailTemplate !== '')
    vals['removeEmailTemplate'] = removeEmailTemplate;

  var valueStoreUrl = $formValues.querySelector('.valueStoreUrl')?.value;
  var removeStoreUrl = $formValues.querySelector('.removeStoreUrl')?.value === 'true';
  var setStoreUrl = removeStoreUrl ? null : $formValues.querySelector('.setStoreUrl')?.value;
  var addStoreUrl = $formValues.querySelector('.addStoreUrl')?.value;
  if(removeStoreUrl || setStoreUrl != null && setStoreUrl !== '')
    vals['setStoreUrl'] = setStoreUrl;
  if(addStoreUrl != null && addStoreUrl !== '')
    vals['addStoreUrl'] = addStoreUrl;
  var removeStoreUrl = $formValues.querySelector('.removeStoreUrl')?.value;
  if(removeStoreUrl != null && removeStoreUrl !== '')
    vals['removeStoreUrl'] = removeStoreUrl;

  var valueInstagramUrl = $formValues.querySelector('.valueInstagramUrl')?.value;
  var removeInstagramUrl = $formValues.querySelector('.removeInstagramUrl')?.value === 'true';
  var setInstagramUrl = removeInstagramUrl ? null : $formValues.querySelector('.setInstagramUrl')?.value;
  var addInstagramUrl = $formValues.querySelector('.addInstagramUrl')?.value;
  if(removeInstagramUrl || setInstagramUrl != null && setInstagramUrl !== '')
    vals['setInstagramUrl'] = setInstagramUrl;
  if(addInstagramUrl != null && addInstagramUrl !== '')
    vals['addInstagramUrl'] = addInstagramUrl;
  var removeInstagramUrl = $formValues.querySelector('.removeInstagramUrl')?.value;
  if(removeInstagramUrl != null && removeInstagramUrl !== '')
    vals['removeInstagramUrl'] = removeInstagramUrl;

  var valueTitle = $formValues.querySelector('.valueTitle')?.value;
  var removeTitle = $formValues.querySelector('.removeTitle')?.value === 'true';
  var setTitle = removeTitle ? null : $formValues.querySelector('.setTitle')?.value;
  var addTitle = $formValues.querySelector('.addTitle')?.value;
  if(removeTitle || setTitle != null && setTitle !== '')
    vals['setTitle'] = setTitle;
  if(addTitle != null && addTitle !== '')
    vals['addTitle'] = addTitle;
  var removeTitle = $formValues.querySelector('.removeTitle')?.value;
  if(removeTitle != null && removeTitle !== '')
    vals['removeTitle'] = removeTitle;

  var valueProductNum = $formValues.querySelector('.valueProductNum')?.value;
  var removeProductNum = $formValues.querySelector('.removeProductNum')?.value === 'true';
  var setProductNum = removeProductNum ? null : $formValues.querySelector('.setProductNum')?.value;
  var addProductNum = $formValues.querySelector('.addProductNum')?.value;
  if(removeProductNum || setProductNum != null && setProductNum !== '')
    vals['setProductNum'] = setProductNum;
  if(addProductNum != null && addProductNum !== '')
    vals['addProductNum'] = addProductNum;
  var removeProductNum = $formValues.querySelector('.removeProductNum')?.value;
  if(removeProductNum != null && removeProductNum !== '')
    vals['removeProductNum'] = removeProductNum;

  var valueImageUri = $formValues.querySelector('.valueImageUri')?.value;
  var removeImageUri = $formValues.querySelector('.removeImageUri')?.value === 'true';
  var setImageUri = removeImageUri ? null : $formValues.querySelector('.setImageUri')?.value;
  var addImageUri = $formValues.querySelector('.addImageUri')?.value;
  if(removeImageUri || setImageUri != null && setImageUri !== '')
    vals['setImageUri'] = setImageUri;
  if(addImageUri != null && addImageUri !== '')
    vals['addImageUri'] = addImageUri;
  var removeImageUri = $formValues.querySelector('.removeImageUri')?.value;
  if(removeImageUri != null && removeImageUri !== '')
    vals['removeImageUri'] = removeImageUri;

  patchDollVals( == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:':' + }], vals, target, success, error);
}

function patchDollFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });

    var filterDescription = $formFilters.querySelector('.valueDescription')?.value;
    if(filterDescription != null && filterDescription !== '')
      filters.push({ name: 'fq', value: 'description:' + filterDescription });

    var filterPrice = $formFilters.querySelector('.valuePrice')?.value;
    if(filterPrice != null && filterPrice !== '')
      filters.push({ name: 'fq', value: 'price:' + filterPrice });

    var filterUri = $formFilters.querySelector('.valueUri')?.value;
    if(filterUri != null && filterUri !== '')
      filters.push({ name: 'fq', value: 'uri:' + filterUri });

    var filterUrl = $formFilters.querySelector('.valueUrl')?.value;
    if(filterUrl != null && filterUrl !== '')
      filters.push({ name: 'fq', value: 'url:' + filterUrl });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterPageId = $formFilters.querySelector('.valuePageId')?.value;
    if(filterPageId != null && filterPageId !== '')
      filters.push({ name: 'fq', value: 'pageId:' + filterPageId });

    var filterResourceUri = $formFilters.querySelector('.valueResourceUri')?.value;
    if(filterResourceUri != null && filterResourceUri !== '')
      filters.push({ name: 'fq', value: 'resourceUri:' + filterResourceUri });

    var filterTemplateUri = $formFilters.querySelector('.valueTemplateUri')?.value;
    if(filterTemplateUri != null && filterTemplateUri !== '')
      filters.push({ name: 'fq', value: 'templateUri:' + filterTemplateUri });

    var filterEmailTemplate = $formFilters.querySelector('.valueEmailTemplate')?.value;
    if(filterEmailTemplate != null && filterEmailTemplate !== '')
      filters.push({ name: 'fq', value: 'emailTemplate:' + filterEmailTemplate });

    var filterStoreUrl = $formFilters.querySelector('.valueStoreUrl')?.value;
    if(filterStoreUrl != null && filterStoreUrl !== '')
      filters.push({ name: 'fq', value: 'storeUrl:' + filterStoreUrl });

    var filterInstagramUrl = $formFilters.querySelector('.valueInstagramUrl')?.value;
    if(filterInstagramUrl != null && filterInstagramUrl !== '')
      filters.push({ name: 'fq', value: 'instagramUrl:' + filterInstagramUrl });

    var filterTitle = $formFilters.querySelector('.valueTitle')?.value;
    if(filterTitle != null && filterTitle !== '')
      filters.push({ name: 'fq', value: 'title:' + filterTitle });

    var filterProductNum = $formFilters.querySelector('.valueProductNum')?.value;
    if(filterProductNum != null && filterProductNum !== '')
      filters.push({ name: 'fq', value: 'productNum:' + filterProductNum });

    var filterImageUri = $formFilters.querySelector('.valueImageUri')?.value;
    if(filterImageUri != null && filterImageUri !== '')
      filters.push({ name: 'fq', value: 'imageUri:' + filterImageUri });
  }
  return filters;
}

function patchDollVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchDollVals(filters, vals, target, success, error);
}

function patchDollVals(filters, vals, target, success, error) {
  fetch(
    '/api/product/doll?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PATCH'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// POST //

async function postDoll($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      addError(target, jqXhr);
    };
  }

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueName = $formValues.querySelector('.valueName')?.value;
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  var valueDescription = $formValues.querySelector('.valueDescription')?.value;
  if(valueDescription != null && valueDescription !== '')
    vals['description'] = valueDescription;

  var valuePrice = $formValues.querySelector('.valuePrice')?.value;
  if(valuePrice != null && valuePrice !== '')
    vals['price'] = valuePrice;

  var valueUri = $formValues.querySelector('.valueUri')?.value;
  if(valueUri != null && valueUri !== '')
    vals['uri'] = valueUri;

  var valueUrl = $formValues.querySelector('.valueUrl')?.value;
  if(valueUrl != null && valueUrl !== '')
    vals['url'] = valueUrl;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  var valueSolrId = $formValues.querySelector('.valueSolrId')?.value;
  if(valueSolrId != null && valueSolrId !== '')
    vals['solrId'] = valueSolrId;

  var valuePageId = $formValues.querySelector('.valuePageId')?.value;
  if(valuePageId != null && valuePageId !== '')
    vals['pageId'] = valuePageId;

  var valueResourceUri = $formValues.querySelector('.valueResourceUri')?.value;
  if(valueResourceUri != null && valueResourceUri !== '')
    vals['resourceUri'] = valueResourceUri;

  var valueTemplateUri = $formValues.querySelector('.valueTemplateUri')?.value;
  if(valueTemplateUri != null && valueTemplateUri !== '')
    vals['templateUri'] = valueTemplateUri;

  var valueEmailTemplate = $formValues.querySelector('.valueEmailTemplate')?.value;
  if(valueEmailTemplate != null && valueEmailTemplate !== '')
    vals['emailTemplate'] = valueEmailTemplate;

  var valueStoreUrl = $formValues.querySelector('.valueStoreUrl')?.value;
  if(valueStoreUrl != null && valueStoreUrl !== '')
    vals['storeUrl'] = valueStoreUrl;

  var valueInstagramUrl = $formValues.querySelector('.valueInstagramUrl')?.value;
  if(valueInstagramUrl != null && valueInstagramUrl !== '')
    vals['instagramUrl'] = valueInstagramUrl;

  var valueTitle = $formValues.querySelector('.valueTitle')?.value;
  if(valueTitle != null && valueTitle !== '')
    vals['title'] = valueTitle;

  var valueProductNum = $formValues.querySelector('.valueProductNum')?.value;
  if(valueProductNum != null && valueProductNum !== '')
    vals['productNum'] = valueProductNum;

  var valueImageUri = $formValues.querySelector('.valueImageUri')?.value;
  if(valueImageUri != null && valueImageUri !== '')
    vals['imageUri'] = valueImageUri;

  fetch(
    '/api/product/doll'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function postDollVals(vals, target, success, error) {
  fetch(
    '/api/product/doll'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PUTImport //

async function putimportDoll($formValues, target, , success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportDollVals(JSON.parse(json), target, success, error);
}

function putimportDollVals(json, target, success, error) {
  fetch(
    '/api/product/doll-import'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PUT'
      , body: JSON.stringify(json)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

async function websocketDoll(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketDoll', function (error, message) {
      var json = JSON.parse(message['body']);
      var  = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' +  + ' ');
      $box.setAttribute('id', 'box-' + );
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + );
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + );
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + );
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-solid fa-reel"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify dolls in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' +  + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + );
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + );
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + );
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + );
      $progress.innerText = numPATCH + '/' + numFound;
      $card.append($header);
      $header.append($i);
      $header.append($headerSpan);
      $header.append($x);
      $body.append($bar);
      $bar.append($progress);
      $card.append($body);
      $box.append($margin);
      $margin.append($card);
      if(numPATCH < numFound) {
        var $old_box = document.querySelector('.box-' + );
      } else {
        document.querySelector('.box-' + )?.remove();
      }
      if() {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketDollInner(apiRequest) {
  var  = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if( != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');


        jsWebsocketDoll(, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listDoll = JSON.parse($response.querySelector('.pageForm .listDoll')?.value);


          pageGraphDoll();
      });
    });
  }
}

function pageGraphDoll(apiRequest) {
  var r = document.querySelector('.pageForm .pageResponse')?.value;
  if(r) {
    var json = JSON.parse(r);
    if(json['facetCounts']) {
      var facetCounts = json.facetCounts;
      if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
        var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
        var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
        var rangeName;
        var rangeVar;
        var rangeVarFq;
        var rangeCounts;
        var rangeVals;
        if(range) {
          rangeName = range.name;
          rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
          rangeVarFq = window.varsFq[rangeVar];
          rangeCounts = range.counts;
          rangeVals = Object.keys(rangeCounts).map(key => key);
        }
        var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
        var pivot1VarIndexed = pivot1Name;
        if(pivot1VarIndexed.includes(','))
          pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
        var pivot1VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot1VarIndexed)[0];
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'dolls';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot2VarIndexed)[0];
            var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
            layout['yaxis'] = {
              title: pivot2VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              trace['x'] = Object.keys(pivot1Counts).map(key => key);
              if(pivot2Map) {
                var xs = [];
                var ys = [];
                var pivot2Vals = Object.keys(pivot2Map);
                pivot2Vals.forEach((pivot2Val) => {
                  var pivot2 = pivot2Map[pivot2Val];
                  var pivot2Counts = pivot2.ranges[rangeName].counts;
                  Object.entries(pivot2Counts).forEach(([key, count]) => {
                    xs.push(key);
                    ys.push(parseFloat(pivot2Val));
                  });
                });
                trace['y'] = ys;
                trace['x'] = xs;
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
                trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              }
              data.push(trace);
            });
          } else {
            layout['yaxis'] = {
              title: pivot1VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
                trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
              }
              trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              data.push(trace);
            });
          }
          Plotly.react('htmBodyGraphDollPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqDoll_time').innerText = '';
  searchPage('Doll', function() {
    let speedRate = parseFloat(document.querySelector('#animateStatsSpeed')?.value) * 1000;
    let xStep = parseFloat(document.querySelector('#animateStatsStep')?.value);
    let xMin = parseFloat(document.querySelector('#animateStatsMin')?.value);
    let xMax = parseFloat(document.querySelector('#animateStatsMax')?.value);
    let x = xMin;

    let animateInterval = window.setInterval(() => {
      x = x + xStep;
      if (x > xMax || x < 0) {
        clearInterval(animateInterval);
      }
      document.querySelector('#fqDoll_time').value = x;
      document.querySelector('#fqDoll_time').onchange();
      searchPage('Doll');
    }, speedRate);
  });
}
