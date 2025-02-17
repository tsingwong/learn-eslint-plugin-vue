/* eslint-disable @typescript-eslint/no-require-imports */
import React from 'react';
import ReactTooltip = require('react-tooltip');

const { useState, useEffect } = React;

import { RuleNamespaces, RuleVueNamespaces } from '../constants/rule';
import { GitHubCorner } from './GitHubCorner';
import { RuleTable } from './RuleTable';

export const App: React.SFC = () => {
    const [namespace, updateNamespace] = useState<RuleVueNamespaces>('All');
    const [shouldHideOff, toggleShouldHideOff] = useState(false);

    useEffect(() => {
        ReactTooltip.rebuild();
    }, [namespace]);

    const Header = (
        <div className="flex-center">
            <div className="container-fluid">
                <h1>eslint-plugin-vue 规则</h1>
                <form className="top-gap site-form">
                    <select
                        value={namespace}
                        onChange={(e) => updateNamespace(e.target.value as RuleVueNamespaces)}
                    >
                        <option value="All">全部</option>
                        <option value="Base">Base</option>
                        <option value="PriorityA">PriorityA</option>
                        <option value="PriorityB">PriorityB</option>
                        <option value="PriorityC">PriorityC</option>
                        <option value="Uncategorized">Uncategorized</option>
                    </select>
                    {/* <label>
                        <input
                            type="checkbox"
                            checked={shouldHideOff}
                            onChange={(e) => toggleShouldHideOff(e.target.checked)}
                        />
                        隐藏已禁用的规则
                    </label> */}
                </form>
            </div>
        </div>
    );

    return (
        <>
            <GitHubCorner href="https://github.com/tsingwong/learn-eslint-plugin-vue" />
            {Header}
            <RuleTable namespace={namespace} shouldHideOff={shouldHideOff} />
            <ReactTooltip
                className="site-react-tooltip"
                place="top"
                type="error"
                effect="solid"
                delayHide={100}
                html={true}
            />
        </>
    );
};
