Promise.all([
    customElements.whenDefined('sl-button')
    , customElements.whenDefined('sl-input')
    ]).then(() => {

          document.querySelector('#htmButton_patchDoll')?.addEventListener('click', (event) => {
            document.querySelector('#patchDollDialog').show();
          });

          document.querySelector('#htmButton_postDoll')?.addEventListener('click', (event) => {
            document.querySelector('#postDollDialog').show();
          });

          document.querySelector('#htmButton_putimportDoll')?.addEventListener('click', (event) => {
            document.querySelector('#putimportDollDialog').show();
          });

          document.querySelector('#htmButton_searchpageDoll')?.addEventListener('click', (event) => {
            document.querySelector('#searchpageDollDialog').show();
          });

          // PATCH created
          document.querySelector('#fqDoll_created')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_created')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_created')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_created')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.value.split('[').pop().split(']')[0];
              var t1 = moment(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a');
              var t2 = moment.tz(event.currentTarget.value.split('[')[0].trim(), 'MM/DD/YYYY h:mm a', timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_created')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_created')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH objectId
          document.querySelector('#Page_objectId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_objectId');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setObjectId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_objectId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_objectId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_objectId');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Page_archived')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_archived')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#fqDoll_name')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_name')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_name')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_name')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_name')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#fqDoll_description')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_description')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_description')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_description')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_description')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH price
          document.querySelector('#fqDoll_price')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_price')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_price')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_price')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_price');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setPrice', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_price')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_price')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_price');
            const valid = form.reportValidity();
          });

          // PATCH uri
          document.querySelector('#fqDoll_uri')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_uri')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_uri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_uri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_uri');
            const valid = form.reportValidity();
          });

          // PATCH url
          document.querySelector('#fqDoll_url')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_url')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_url')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setUrl', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_url')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_url')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_url');
            const valid = form.reportValidity();
          });

          // PATCH inheritPk
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setInheritPk', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_inheritPk')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_inheritPk');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Page_sessionId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_sessionId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_sessionId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Page_userKey')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_userKey')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_userKey')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH id
          document.querySelector('#Page_id')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_id')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_id')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_id');
            const valid = form.reportValidity();
          });

          // PATCH pageId
          document.querySelector('#fqDoll_pageId')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_pageId')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_pageId')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setPageId', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_pageId')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_pageId');
            const valid = form.reportValidity();
          });

          // PATCH resourceUri
          document.querySelector('#fqDoll_resourceUri')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_resourceUri')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_resourceUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setResourceUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_resourceUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_resourceUri');
            const valid = form.reportValidity();
          });

          // PATCH templateUri
          document.querySelector('#fqDoll_templateUri')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_templateUri')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_templateUri')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setTemplateUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_templateUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_templateUri');
            const valid = form.reportValidity();
          });

          // PATCH emailTemplate
          document.querySelector('#fqDoll_emailTemplate')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_emailTemplate')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_emailTemplate')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_emailTemplate')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_emailTemplate');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setEmailTemplate', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_emailTemplate')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_emailTemplate')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_emailTemplate');
            const valid = form.reportValidity();
          });

          // PATCH storeUrl
          document.querySelector('#fqDoll_storeUrl')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_storeUrl')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_storeUrl')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_storeUrl')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_storeUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setStoreUrl', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_storeUrl')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_storeUrl')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_storeUrl');
            const valid = form.reportValidity();
          });

          // PATCH instagramUrl
          document.querySelector('#fqDoll_instagramUrl')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_instagramUrl')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_instagramUrl')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_instagramUrl')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_instagramUrl');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setInstagramUrl', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_instagramUrl')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_instagramUrl')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_instagramUrl');
            const valid = form.reportValidity();
          });

          // PATCH title
          document.querySelector('#Page_title')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setTitle', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_title')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_title')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_title');
            const valid = form.reportValidity();
          });

          // PATCH productNum
          document.querySelector('#fqDoll_productNum')?.addEventListener('sl-change', (event) => {
            fqChange('Doll', event.target);
          });
          document.querySelector('#buttonFacetDoll_productNum')?.addEventListener('click', (event) => {
            facetFieldChange('Doll', event.target);
          });
          document.querySelector('#pageFacetPivotDoll_productNum')?.addEventListener('sl-change', (event) => {
            facetPivotChange('Doll', event.target);
          });
          document.querySelector('#Page_productNum')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_productNum');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setProductNum', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_productNum')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_productNum')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_productNum');
            const valid = form.reportValidity();
          });

          // PATCH imageUri
          document.querySelector('#Page_imageUri')?.addEventListener('sl-change', (event) => {
            const form = document.querySelector('#PageForm_imageUri');
            const valid = form.checkValidity();
            if(valid) {
              patchDollVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'id:' + event.currentTarget.getAttribute('data-id') }]
                  , 'setImageUri', event.currentTarget.value
                  , event.currentTarget
                  , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Page_imageUri')?.addEventListener('sl-focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Page_imageUri')?.addEventListener('sl-blur', (event) => {
            const form = document.querySelector('#PageForm_imageUri');
            const valid = form.reportValidity();
          });
});
