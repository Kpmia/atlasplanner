import React from "react";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import { LiveSiteUtils } from "../../LiveEvent/utils/LiveSiteUtil";
import { Demo } from "../demo/Demo";
import { OrgService } from "../organizations/OrgService";

export const Auth = {

    signUp: async(email, password, fullOrgName, displayName) => {
        db.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            user.user.updateProfile({
                displayName: displayName
            })
            var orgName = LiveSiteUtils.splitSpacesToDashes(fullOrgName)

            const body = {
                'name': orgName
            }
            OrgService.createOrganization(body).then((org) => {
                if (org) {
                    localStorage.setItem('org_id', orgName)
                    // Demo.createDemoData(orgName).then(() => {
                        localStorage.setItem('new_user', true)
                        localStorage.setItem('first_session', true)
                        // setTimeout(() => {
                        return window.location.href = '/events/all/' + orgName 
                        // }, 4500)
                    // })
                } else {
                    return toast.dark('Organization name is taken. Try another name.')
                }
            })
        }).catch(function(error) {
            var errorMessage = error.message;
            return toast.dark(errorMessage)
        });
    },

    login: async(email, password) => {
        db.auth().signInWithEmailAndPassword(email, password).then((user) => {
            OrgService.getAllOrganizations().then((val) => {
                localStorage.setItem('new_user', false)
                localStorage.setItem('first_session', false)
                if (val) {
                    localStorage.setItem('org_id', val[0]["_id"])
                    return window.location.href = '/events/all/' + val[0]["_id"] 
                }
            })
        }).catch(function(error) {
            var errorMessage = error.message;
            return toast.dark(errorMessage)
        });
    }
}